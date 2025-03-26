const { Server } = require("socket.io");

// Create a new WebSocket server
let io;

const Init = (server) => {
  io = new Server(server, {
    cors: {
      origin: process.env.FRONTEND_URL,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("New client connected", socket.id);
  });
};
module.exports = { Init };
