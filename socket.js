
const socket = (io) => {
  io.on("connection", (client) => {
    console.log("New Connection");
    client.on("disconnect", () => {
      console.log("user left");
    });
  });
};

module.exports = socket;
