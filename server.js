const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io').listen(http);
http.listen(8080);

const players = [];

class Player {
  constructor(id, socketId){
    this.socketId = socketId;
    this.id = id;
    this.money = 1500;
    this.figure = "public/figures/fig"+players.length+".png";
    this.shops = [];
  }
}

const gameStart = ()=>{
  console.log("4 players are ready, the games has started.");
  io.sockets.emit("gameStarted");
}

app.get('/', (req, res)=>{
  if (players.length < 4)
    res.sendFile(__dirname + '/public/index.html');
  else
    res.end(404);
});

app.use(express.static('public'));

io.on('connection', (socket)=>{
	console.log("A new socket connected to server. It's ID is - " + socket.id);
  players.push(new Player(players.length, socket.id));

  if (players.length===4)
    gameStart();
});
