const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");

const router = require("./router");

const memes = require("./memeCollection");

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000' // URL of the react (Frontend) app
}));

app.use(router);
app.use(express.static(__dirname + '/node_modules'));

app.get('/', (req, res) => {
  res.send('Welcome to Socket.IO App! - Clue Mediator');
});
 
app.get("/memes", (req, res) => {
  res.send(memes);
});

var server = app.listen(port, () => {
  console.log('Server started on: ' + port);
});
 




// attach socket to the node server

const io = require('socket.io').listen(server);
const socket = require('./socket')
socket(io);