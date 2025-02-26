const http = require("http");
const socket = require("socket.io"); // socket.io nu chalon lai nttp server chida aa.
const server = http.createServer(app);
const io = socketio(server);
