'use strict'

const socket = io();
const playerImgs = [new Image(), new Image(), new Image(), new Image()];
playerImgs[0].src = "imgs/figures/fig0.png";
playerImgs[1].src = "imgs/figures/fig1.png";
playerImgs[2].src = "imgs/figures/fig2.png";
playerImgs[3].src = "imgs/figures/fig3.png";

const fields = [
  {index: 0, info: "Starting Point. You get 200$ everytime you pass.", color: "#808080", owner: null, src:null},
  {index: 1, info: "Mediterranean Avenue", color: "#A52A2A", owner: "no one", src:""},
  {index: 2, info: "Community Chest", color: "#808080", owner: null, src:null},
  {index: 3, info: "Baltic Avenue", color: "#A52A2A", owner: "no one", src:""},
  {index: 4, info: "Income Tax", color: "#808080", owner: null, src:null},
  {index: 5, info: "Reading Railroad", color: "#FFFFFF", owner: "no one", src:""},
  {index: 6, info: "Oriental Avenue", color: "#0099cc", owner: "no one", src:""},
  {index: 7, info: "Chance", color: "#808080", owner: null, src:null},
  {index: 8, info: "Vermont Avenue", color: "#0099cc", owner: "no one", src:""},
  {index: 9, info: "Connecticut Avenue", color: "#0099cc", owner: "no one", src:""},
  {index: 10, info: "Jail", color: "#808080", owner: null, src:null},
  {index: 11, info: "St. Charles Place", color: "#FF69B4", owner: "no one", src:""},
  {index: 12, info: "Electric Company", color: "#735F5F", owner: "no one", src:""},
  {index: 13, info: "States Avenue", color: "#FF69B4", owner: "no one", src:""},
  {index: 14, info: "Virginia Avenue", color: "#FF69B4", owner: "no one", src:""},
  {index: 15, info: "Pennsylvania Railroad", color: "#FFFFFF", owner: "no one", src:""},
  {index: 16, info: "St. James Place", color: "#FF8000", owner: "no one", src:""},
  {index: 17, info: "Community Chest", color: "#808080", owner: null, src:null},
  {index: 18, info: "Tennessee Avenue", color: "#FF8000", owner: "no one", src:""},
  {index: 19, info: "New York Avenue", color: "#FF8000", owner: "no one", src:""},
  {index: 20, info: "Free Park", color: "#808080", owner: null, src:null},
  {index: 21, info: "Kentucky Avenue", color: "#FF0000", owner: "no one", src:""},
  {index: 22, info: "Chance", color: "#808080", owner: "no one", src:""},
  {index: 23, info: "Indiana Avenue", color: "#FF0000", owner: "no one", src:""},
  {index: 24, info: "Illinois Avenue", color: "#FF0000", owner: "no one", src:""},
  {index: 25, info: "B. & O. Railroad", color: "#FFFFFF", owner: "no one", src:""},
  {index: 26, info: "Atlantic Avenue", color: "#FFFF00", owner: "no one", src:""},
  {index: 27, info: "Ventnor Avenue", color: "#FFFF00", owner: "no one", src:""},
  {index: 28, info: "Water Works", color: "#735F5F", owner: "no one", src:""},
  {index: 29, info: "Marvin Gardens", color: "#FFFF00", owner: "no one", src:""},
  {index: 30, info: "Go to Jail", color: "#808080", owner: null, src:null},
  {index: 31, info: "Pacific Avenue", color: "#008000", owner: "no one", src:""},
  {index: 32, info: "North Carolina Avenue", color: "#008000", owner: "no one", src:""},
  {index: 33, info: "Community Chest", color: "#808080", owner: null, src:null},
  {index: 34, info: "Pennsylvania Avenue", color: "#008000", owner: "no one", src:""},
  {index: 35, info: "Short Line", color: "#FFFFFF", owner: "no one", src:""},
  {index: 36, info: "Chance", color: "#808080", owner: null, src:null},
  {index: 37, info: "Park Place", color: "#2020CC", owner: "no one", src:""},
  {index: 38, info: "Luxury Tax", color: "#808080", owner: null, src:null},
  {index: 39, info: "Boardwalk", color: "#2020CC", owner: "no one", src:""},
];


socket.on("playerInfoUpdate", (playerData)=>{
  window.money = JSON.parse(playerData).socketMoney; //has to be in the player information, top left corner, REACT
  console.log(money);
  let property = JSON.parse(playerData).socketProperty; //has to be in the player information, top left corner, REACT
  //let cards = JSON.parse(playerData.socketCards); //array, length = 2, boolean values, cards[0]= (true if player has a jail card) cards[1]= (true if player doesnt have to pay rent for the next house he moves to)
  renderMoney();
});
socket.on("diceResults", (dice1, dice2)=>{
  //dice animation
});
socket.on("getTheCard", (text)=>{
  console.log(text);
  showCard(text);
});

window.onload = ()=>{
  document.getElementById("diceBtn").setAttribute("style", "left: "+(100+canvas.width)+"px;");
  socket.on("mapInfoPlayerPos", (mapData)=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(mapData);
    for (let i=0; i<mapData.length; i++){
      playerPositionUpdate(ctx, mapData[i], playerImgs[i]);
    }

  });
  socket.on("whoseTurn", (n)=>{
    whoseTurn(n+1);
  });
  socket.on("gameStarted", ()=>{
    console.log("started");
    document.getElementById("diceBtn").setAttribute("onclick", "socket.emit('moveTheFigure')");
  });
  socket.on("itsYourTurn", ()=>{
    yourTurnAnimation();
  });
  socket.on("notYourTurn", (n)=>{
    notYourTurnAnimation(n);
  });
  socket.on("imprisoned", (n)=>{
    console.log("player"+n+" got imprisoned.");
  });
  socket.on("buyMe?", (n)=>{
    console.log("do you want to buy this street?");
  });
  renderDropDown();
}
