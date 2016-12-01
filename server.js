"use strict"

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
    this.currentField = 0;
  }
  move(fields){
    this.currentField = (40+this.currentField + fields)%40;
  }
}

class RegularStreet {
  // type 0;

  /*constructor(price){
    this.owner = null;
    this.price = price;
  }*/
}

class Chance {
  //type 4;
}

class TrainStation {
  //type 3;
}

class IncomeTax {
  //type 2;
}

class LuxuryTax {
  //type 11;
}

class Water {
  //type 9;
}

class Electricity {
  //type 6;
}

class Chest {
  //type 1;
}

class Jail {
  //type 5;
}

class GoToJail {
  //type 10;
}

const map = [{type: 8},
{type: 0, fieldData: new RegularStreet()},
{type: 1, fieldData: new Chest()},
{type: 0, fieldData: new RegularStreet()},
{type: 2, fieldData: new IncomeTax()},
{type: 3, fieldData: new TrainStation()},
{type: 0, fieldData: new RegularStreet()},
{type: 4, fieldData: new Chance()},
{type: 0, fieldData: new RegularStreet()},
{type: 0, fieldData: new RegularStreet()},
{type: 5, fieldData: new Jail()},
{type: 0, fieldData: new RegularStreet()},
{type: 6, fieldData: new Electricity()},
{type: 0, fieldData: new RegularStreet()},
{type: 0, fieldData: new RegularStreet()},
{type: 3, fieldData: new TrainStation()},
{type: 0, fieldData: new RegularStreet()},
{type: 1, fieldData: new Chest()},
{type: 0, fieldData: new RegularStreet()},
{type: 0, fieldData: new RegularStreet()},
{type: 7},
{type: 0, fieldData: new RegularStreet()},
{type: 4, fieldData: new Chance()},
{type: 0, fieldData: new RegularStreet()},
{type: 0, fieldData: new RegularStreet()},
{type: 3, fieldData: new TrainStation()},
{type: 0, fieldData: new RegularStreet()},
{type: 0, fieldData: new RegularStreet()},
{type: 9, fieldData: new Water()},
{type: 0, fieldData: new RegularStreet()},
{type: 10, fieldData: new GoToJail()},
{type: 0, fieldData: new RegularStreet()},
{type: 0, fieldData: new RegularStreet()},
{type: 1, fieldData: new Chest()},
{type: 0, fieldData: new RegularStreet()},
{type: 3, fieldData: new TrainStation()},
{type: 4, fieldData: new Chance()},
{type: 0, fieldData: new RegularStreet()},
{type: 11, fieldData: new LuxuryTax()},
{type: 0, fieldData: new RegularStreet()}];

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
