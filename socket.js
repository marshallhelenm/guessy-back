const { addUser, removeUser, getUser, getUsersInRoom } = require("./users.js");

const socket = (io) => {
  io.on("connection", (client) => {
    client.on("join", ({ name, room }, callback) => {
      //event: user joins

      const { user, error } = addUser({ id: client.id, name, room });
      
      if (error) return callback(error);
      
      client.join(user.room);

      client.emit("message", {
        user: "admin",
        text: `${user.name}, welcome to the room ${user.room}.`,
      }); // lets the user know they've joined the chat

      client.broadcast
        .to(user.room)
        .emit("message", { user: "admin", text: `${user.name} has joined!` }); //lets everyone else know the user has joined the chat

      callback();
    });

    client.on("sendMessage", (message, callback) => { //event: user sends a message
      const user = getUser(client.id);

      io.to(user.room).emit("message", { user: user.name, text: message });

      callback();
    });

    client.on("disconnect", () => {
      //event: user leaves
      console.log("user left");
    });
  });
};

module.exports = socket;
