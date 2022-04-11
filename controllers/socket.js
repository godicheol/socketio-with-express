'use strict';

const io = require("socket.io")();
io.on('connection', function(socket) {
    const users = [];
    console.log("a user connected");

    io.emit('news', {
        name: "admin",
        message: "New user connected."
    });

    socket.on('disconnect', function() {
        console.log("user disconnected");

        io.emit('news', {
            name: "admin",
            message: "User disconnected."
        });
    });

    socket.on('chat', function(msg) {
        io.emit('chat', {
            name: msg.name,
            message: msg.message
        });
    });
});

module.exports = {
    io: io
};

