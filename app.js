const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const router = require("./router");

const port = process.env.PORT || 5000;
const memes = require("./memeCollection");

app.use(router);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET");
    return res.status(200).json({});
  }
  next();
});

app.get("/memes", (req, res) => {
  res.send(memes);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//socket io:

io.on("connection", (socket) => {
  console.log("new connection");
  socket.on('disconnect', ()=>{
      console.log('user left')
  })
});
