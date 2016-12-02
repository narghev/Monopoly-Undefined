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
    this.inJail = false;
  }
  move(fields){
    this.currentField = (40+this.currentField + fields)%40;
  }
}

class RegularStreet {
  // type 0;

  /*
    type 1 - Purple
    type 2 - Light-Blue
    type 3 - Violet
    type 4 - Orange
    type 5 - Red
    type 6 - Yellow
    type 7 - Dark-Green
    type 8 - Dark-Blue
  */

  constructor(price, rent, group){
    this.owner = null;
    this.price = price;
    this.hotel = false;
    this.houses = 0;
    this.rent = rent;
    this.group = group;
  }
}

const chanceArr = [{text: "", func()=>{}},
  {text: "", func(){}},
  {text: "", func(){}},
  {text: "", func(){}},
  {text: "", func(){}},
  {text: "", func(){}},
  {text: "", func(){}},
  {text: "", func(){}},
  {text: "", func(){}},
  {text: "", func(){}},
  {text: "", func(){}},
  {text: "", func(){}},
  {text: "", func(){}},
  {text: "", func(){}},
  {text: "", func(){}}];

class Chance {
  //type 4;

  showChaceCard(){
    let chosenCard = chanceArr[Math.floor(Math.random()*chanceArr.length)];
  }

}

class TrainStation {
  //type 3;

  constructor(){
    this.owner = null;
    this.price = 200;
  }

  /*
    Charge 25 if one owned,
    50 if two owned,
    100 if three owned,
    200 if all owned by the same owner.
  */
}

class IncomeTax {
  //type 2;
}

class LuxuryTax {
  //type 11;
}

class Water {
  //type 9;

  constructor(){
    this.owner = null;
    this.price = 150;
  }

  /*
    Charge 4 times roll of dice is one is owned,
    10 times roll of dice if Electricity is also owned.
  */
}

class Electricity {
  //type 6;

  constructor(){
    this.owner = null;
    this.price = 150;
  }

  /*
    Charge 4 times roll of dice is one is owned,
    10 times roll of dice if Water is also owned.
  */
}

class Chest {
  //type 1;
}

class Jail {
  //type 5;

  constructor(){
      this.currentPrisoners = [];
  }

}

class GoToJail {
  //type 10;
}

const regStrT1Arr = [{type: 0, fieldData: new RegularStreet(60,2,1)},
  {type: 0, fieldData: new RegularStreet(60,4,1)}];
const regStrT2Arr = [{type: 0, fieldData: new RegularStreet(100,6,2)},
  {type: 0, fieldData: new RegularStreet(100,6,2)},
  {type: 0, fieldData: new RegularStreet(120,8,2)}];
const regStrT3Arr = [{type: 0, fieldData: new RegularStreet(140,10,3)},
  {type: 0, fieldData: new RegularStreet(140,10,3)},
  {type: 0, fieldData: new RegularStreet(160,12,3)}];
const regStrT4Arr = [{type: 0, fieldData: new RegularStreet(180,14,4)},
  {type: 0, fieldData: new RegularStreet(180,14,4)},
  {type: 0, fieldData: new RegularStreet(200,16,4)}];
const regStrT5Arr = [{type: 0, fieldData: new RegularStreet(220,18,5)},
  {type: 0, fieldData: new RegularStreet(220,18,5)},
  {type: 0, fieldData: new RegularStreet(240,20,5)}];
const regStrT6Arr = [{type: 0, fieldData: new RegularStreet(260,22,6)},
  {type: 0, fieldData: new RegularStreet(260,22,6)},
  {type: 0, fieldData: new RegularStreet(280,24,6)}];
const regStrT7Arr = [{type: 0, fieldData: new RegularStreet(300,26,7)},
  {type: 0, fieldData: new RegularStreet(300,26,7)},
  {type: 0, fieldData: new RegularStreet(320,28,7)}];
const regStrT8Arr = [{type: 0, fieldData: new RegularStreet(350,35,8)},
  {type: 0, fieldData: new RegularStreet(350,35,8)}];

const trainStationArr = [{type: 3, fieldData: new TrainStation()},
  {type: 3, fieldData: new TrainStation()},
  {type: 3, fieldData: new TrainStation()},
  {type: 3, fieldData: new TrainStation()}];

const utilitiesArr = [{type: 6, fieldData: new Electricity()},
  {type: 9, fieldData: new Water()}];

const map = [{type: 8},
regStrT1Arr[0],
{type: 1, fieldData: new Chest()},
regStrT1Arr[1],
{type: 2, fieldData: new IncomeTax()},
trainStationArr[0],
regStrT2Arr[0],
{type: 4, fieldData: new Chance()},
regStrT2Arr[1],
regStrT2Arr[2],
{type: 5, fieldData: new Jail()},
regStrT3Arr[0],
utilitiesArr[0],
regStrT3Arr[1],
regStrT3Arr[2],
trainStationArr[1],
regStrT4Arr[0],
{type: 1, fieldData: new Chest()},
regStrT4Arr[1],
regStrT4Arr[2],
{type: 7},
regStrT5Arr[0],
{type: 4, fieldData: new Chance()},
regStrT5Arr[1],
regStrT5Arr[2],
trainStationArr[2],
regStrT6Arr[0],
regStrT6Arr[1],
utilitiesArr[1],
regStrT6Arr[2],
{type: 10, fieldData: new GoToJail()},
regStrT7Arr[0],
regStrT7Arr[1],
{type: 1, fieldData: new Chest()},
regStrT7Arr[2],
trainStationArr[3],
{type: 4, fieldData: new Chance()},
regStrT8Arr[0],
{type: 11, fieldData: new LuxuryTax()},
regStrT8Arr[1]];

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
