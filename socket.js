const socket = (io) => {
  io.on("connection", (client) => {
    console.log("New Connection");

    client.on("join", ({name, room}, callback)=>{
      console.log("join", name, room);

      const error = true;

      if (error) {
        // callback({error: 'error'});

      }
    });

    client.on("disconnect", () => {
      console.log("user left");
    });
  });
};

module.exports = socket;
