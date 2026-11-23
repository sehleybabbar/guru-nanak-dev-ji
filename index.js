'use strict';

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const QRCode = require('qrcode');
const gameManager = require('./gameManager');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

const PORT = process.env.PORT || 3000;
const PUBLIC_URL = process.env.PUBLIC_URL || `http://localhost:${PORT}`;

// ─── Static files ─────────────────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, '../client')));

// ─── Page routes ──────────────────────────────────────────────────────────────
app.get('/host', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/host.html'));
});

app.get('/player', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/player.html'));
});

// ─── Socket.io ────────────────────────────────────────────────────────────────
io.on('connection', (socket) => {
  console.log(`[connect]  ${socket.id}`);

  // ── HOST: create a new game room ──────────────────────────────────────────
  socket.on('create-game', async ({ category }) => {
    const pin = gameManager.createGame(category, socket.id);
    socket.join(pin);

    const playerUrl = `${PUBLIC_URL}/player?pin=${pin}`;
    let qrDataUrl = null;
    try {
      qrDataUrl = await QRCode.toDataURL(playerUrl, { width: 300, margin: 2 });
    } catch (err) {
      console.error('QR generation failed:', err);
    }

    socket.emit('game-created', { pin, qrDataUrl, playerUrl });
    console.log(`[game]     created PIN=${pin} category=${category}`);
  });

  // ── PLAYER: join an existing game room ────────────────────────────────────
  socket.on('join-game', ({ pin, nickname }) => {
    const result = gameManager.joinGame(pin, nickname, socket.id);
    if (!result.ok) {
      socket.emit('join-error', { message: result.message });
      return;
    }
    socket.join(pin);
    socket.emit('join-ok', { nickname });

    // tell host a new player joined
    const game = gameManager.getGame(pin);
    io.to(game.hostSocketId).emit('player-joined', {
      nickname,
      playerCount: game.players.size
    });
    console.log(`[join]     ${nickname} joined PIN=${pin}`);
  });

  // ── HOST: start the game ──────────────────────────────────────────────────
  socket.on('start-game', ({ pin }) => {
    const question = gameManager.startGame(pin);
    if (!question) return;

    // send full question to host, only question number + answer count hint to players
    io.to(pin).emit('question-start', {
      questionIndex: question.index,
      totalQuestions: question.total,
      question: question.question,
      options: question.options,
      timeLimit: question.timeLimit
    });
    console.log(`[question] PIN=${pin} Q${question.index + 1}/${question.total}`);
  });

  // ── PLAYER: submit an answer ───────────────────────────────────────────────
  socket.on('submit-answer', ({ pin, answerIndex }) => {
    const result = gameManager.submitAnswer(pin, socket.id, answerIndex);
    if (!result) return;

    // tell the player if they were right + points earned
    socket.emit('answer-result', {
      correct: result.correct,
      pointsEarned: result.pointsEarned,
      totalScore: result.totalScore,
      correctIndex: result.correctIndex
    });

    // update host answer counter
    const game = gameManager.getGame(pin);
    if (game) {
      io.to(game.hostSocketId).emit('answer-received', {
        answered: game.answeredCount,
        total: game.players.size
      });
    }
  });

  // ── HOST: reveal the correct answer ──────────────────────────────────────
  socket.on('request-reveal', ({ pin }) => {
    const game = gameManager.getGame(pin);
    if (!game) return;
    const q = game.questions[game.currentIndex];
    // broadcast correct answer index to everyone in the room
    io.to(pin).emit('reveal-answer', { correctIndex: q.correct });
    game.state = 'reveal';
  });

  // ── HOST: show leaderboard for current question ───────────────────────────
  socket.on('show-leaderboard', ({ pin }) => {
    const leaderboard = gameManager.getLeaderboard(pin);
    io.to(pin).emit('leaderboard', { leaderboard });
  });

  // ── HOST: advance to next question (or end game) ──────────────────────────
  socket.on('next-question', ({ pin }) => {
    const result = gameManager.nextQuestion(pin);
    if (!result) return;

    if (result.gameOver) {
      const leaderboard = gameManager.getLeaderboard(pin);
      io.to(pin).emit('game-over', { leaderboard });
      gameManager.destroyGame(pin);
      console.log(`[gameover] PIN=${pin}`);
    } else {
      io.to(pin).emit('question-start', {
        questionIndex: result.index,
        totalQuestions: result.total,
        question: result.question,
        options: result.options,
        timeLimit: result.timeLimit
      });
      console.log(`[question] PIN=${pin} Q${result.index + 1}/${result.total}`);
    }
  });

  // ── Disconnect ────────────────────────────────────────────────────────────
  socket.on('disconnect', () => {
    gameManager.removePlayer(socket.id);
    console.log(`[disconnect] ${socket.id}`);
  });
});

// ─── Start server ─────────────────────────────────────────────────────────────
server.listen(PORT, () => {
  console.log(`\n🎮 Guru Nanak Quiz running on port ${PORT}`);
  console.log(`   Host  → ${PUBLIC_URL}/host`);
  console.log(`   Player→ ${PUBLIC_URL}/player\n`);
});
