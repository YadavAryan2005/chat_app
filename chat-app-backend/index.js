const express = require("express");
const http = require("http");
const app = express();

app.use(express.json());

const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

// Socket connection
io.on("connection", (socket) => {
    console.log("connected:", socket.id);
});

// Test API
app.get("/api", (req, res) => {
    res.send("hello");
});

// Start server
server.listen(5000, () => {
    console.log("Server running on 5000");
});
