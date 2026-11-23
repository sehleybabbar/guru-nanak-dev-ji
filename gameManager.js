'use strict';

/**
 * gameManager.js
 * In-memory game state machine for the Guru Nanak Dev Ji Quiz.
 *
 * Game states: lobby → question → reveal → leaderboard → (loop) → gameover
 */

const { juniorQuestions, seniorQuestions } = require('./questions');

// Map of PIN → game object
const games = new Map();

// Map of socketId → PIN (for quick disconnect lookup)
const socketToPin = new Map();

// ─── Helpers ──────────────────────────────────────────────────────────────────

function generatePin() {
  let pin;
  do {
    pin = String(Math.floor(1000 + Math.random() * 9000));
  } while (games.has(pin));
  return pin;
}

function getQuestions(category) {
  return category === 'senior' ? seniorQuestions : juniorQuestions;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Create a new game room.
 * @param {string} category  'junior' | 'senior'
 * @param {string} hostSocketId
 * @returns {string} PIN
 */
function createGame(category, hostSocketId) {
  const pin = generatePin();
  games.set(pin, {
    pin,
    category,
    hostSocketId,
    state: 'lobby',          // lobby | question | reveal | leaderboard | gameover
    questions: getQuestions(category),
    currentIndex: -1,
    questionStartTime: null,
    answeredCount: 0,
    players: new Map()       // socketId → { nickname, score, answered }
  });
  socketToPin.set(hostSocketId, pin);
  return pin;
}

/**
 * Add a player to an existing game.
 * @returns {{ ok: boolean, message?: string }}
 */
function joinGame(pin, nickname, socketId) {
  const game = games.get(pin);
  if (!game) return { ok: false, message: 'Game not found. Check the PIN and try again.' };
  if (game.state !== 'lobby') return { ok: false, message: 'Game has already started.' };

  // reject duplicate nicknames
  for (const p of game.players.values()) {
    if (p.nickname.toLowerCase() === nickname.toLowerCase()) {
      return { ok: false, message: 'That nickname is already taken.' };
    }
  }

  game.players.set(socketId, { nickname, score: 0, answered: false });
  socketToPin.set(socketId, pin);
  return { ok: true };
}

/**
 * Start the game — move to first question.
 * @returns {object|null} question payload
 */
function startGame(pin) {
  const game = games.get(pin);
  if (!game || game.state !== 'lobby') return null;
  game.state = 'question';
  game.currentIndex = 0;
  game.answeredCount = 0;
  resetPlayerAnswers(game);
  game.questionStartTime = Date.now();
  return buildQuestionPayload(game);
}

/**
 * Record a player's answer and calculate speed-based points.
 * @returns {object|null} result payload
 */
function submitAnswer(pin, socketId, answerIndex) {
  const game = games.get(pin);
  if (!game || game.state !== 'question') return null;

  const player = game.players.get(socketId);
  if (!player || player.answered) return null; // already answered

  player.answered = true;
  game.answeredCount++;

  const q = game.questions[game.currentIndex];
  const correct = answerIndex === q.correct;
  let pointsEarned = 0;

  if (correct) {
    const elapsed = (Date.now() - game.questionStartTime) / 1000;
    const remaining = Math.max(0, q.timeLimit - elapsed);
    pointsEarned = Math.round(q.points * (remaining / q.timeLimit));
    pointsEarned = Math.max(pointsEarned, Math.round(q.points * 0.1)); // min 10% for correct
  }

  player.score += pointsEarned;

  return {
    correct,
    pointsEarned,
    totalScore: player.score,
    correctIndex: q.correct
  };
}

/**
 * Advance to the next question, or signal game over.
 * @returns {object|null} next question payload or { gameOver: true }
 */
function nextQuestion(pin) {
  const game = games.get(pin);
  if (!game) return null;

  game.currentIndex++;
  if (game.currentIndex >= game.questions.length) {
    game.state = 'gameover';
    return { gameOver: true };
  }

  game.state = 'question';
  game.answeredCount = 0;
  resetPlayerAnswers(game);
  game.questionStartTime = Date.now();
  return buildQuestionPayload(game);
}

/**
 * Return sorted leaderboard (top players first).
 */
function getLeaderboard(pin) {
  const game = games.get(pin);
  if (!game) return [];

  return Array.from(game.players.values())
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((p, i) => ({ rank: i + 1, nickname: p.nickname, score: p.score }));
}

/**
 * Get total player count for a game.
 */
function getGame(pin) {
  return games.get(pin) || null;
}

/**
 * Remove a player or host from any active game on disconnect.
 */
function removePlayer(socketId) {
  const pin = socketToPin.get(socketId);
  socketToPin.delete(socketId);
  if (!pin) return;

  const game = games.get(pin);
  if (!game) return;

  if (game.hostSocketId === socketId) {
    // host disconnected — clean up the whole room
    games.delete(pin);
  } else {
    game.players.delete(socketId);
  }
}

/**
 * Clean up a finished game.
 */
function destroyGame(pin) {
  const game = games.get(pin);
  if (!game) return;
  socketToPin.delete(game.hostSocketId);
  for (const sid of game.players.keys()) socketToPin.delete(sid);
  games.delete(pin);
}

// ─── Internal helpers ─────────────────────────────────────────────────────────

function resetPlayerAnswers(game) {
  for (const p of game.players.values()) {
    p.answered = false;
  }
}

function buildQuestionPayload(game) {
  const q = game.questions[game.currentIndex];
  return {
    index: game.currentIndex,
    total: game.questions.length,
    question: q.question,
    options: q.options,
    timeLimit: q.timeLimit
  };
}

module.exports = {
  createGame,
  joinGame,
  startGame,
  submitAnswer,
  nextQuestion,
  getLeaderboard,
  getGame,
  removePlayer,
  destroyGame
};
