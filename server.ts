const { Server } = require('boardgame.io/server');
const { SimpleGame } = require('./src/game/SimpleGame');

const server = Server({
  games: [SimpleGame],
  origins: ['http://localhost:5173'],
});

const PORT = Number(process.env.PORT) || 8000;

server.run(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 