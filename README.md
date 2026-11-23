# Guru Nanak Dev Ji — Kahoot-Style Quiz

A real-time multiplayer quiz app about Guru Nanak Dev Ji. Built with Node.js, Express, and Socket.io.

## Run Locally

```bash
npm install
npm start
```

- Host screen: http://localhost:3000/host
- Player screen: http://localhost:3000/player

## Deploy to Railway / Render

1. Push this folder to a GitHub repository.
2. Create a new project on [Railway](https://railway.app) or [Render](https://render.com).
3. Connect your GitHub repo.
4. Set the environment variable: `PUBLIC_URL=https://your-app-url.railway.app`
5. Start command: `node server/index.js`

Players join from anywhere on the internet using their own mobile data — no shared WiFi needed.

## Categories

| Category | Ages | Difficulty | Questions |
|---|---|---|---|
| Junior | 15–18 | Easy / Medium | 25 |
| Senior | 18+ | Medium / Hard | 25 |
