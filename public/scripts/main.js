'use strict'

const blackDiv = document.createElement("DIV");
blackDiv.setAttribute("class", "black-div");

const socket = io();
const playerImgs = [new Image(), new Image(), new Image(), new Image()];
playerImgs[0].src = "imgs/figures/fig0.png";
playerImgs[1].src = "imgs/figures/fig1.png";
playerImgs[2].src = "imgs/figures/fig2.png";
playerImgs[3].src = "imgs/figures/fig3.png";
renderMainDropDown();

socket.on("playerInfoUpdate", (playerData)=>{
  window.money = JSON.parse(playerData).socketMoney; //has to be in the player information, top left corner, REACT
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
  socket.on("cantAfford", ()=>{
    console.log("you cant afford buying this street");
  });
}
