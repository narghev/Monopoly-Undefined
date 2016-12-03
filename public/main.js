'use strict'

const socket = io();
const playerImgs = ["figures/fig0.png", "figures/fig1.png", "figures/fig2.png", "figures/fig3.png"];

socket.on("playerInfoUpdate", (playerData)=>{
  let money = JSON.parse(playerData).socketMoney; //has to be in the player information, top left corner, REACT
  let property = JSON.parse(playerData).socketProperty; //has to be in the player information, top left corner, REACT
  //let cards = JSON.parse(playerData.socketCards); //array, length = 2, boolean values, cards[0]= (true if player has a jail card) cards[1]= (true if player doesnt have to pay rent for the next house he moves to)
  console.log(money, property);
});
socket.on("diceResults", (dice1, dice2)=>{
  //dice animation
});
socket.on("getTheCard", (text)=>{
  console.log(text);
});

window.onload = ()=>{
  socket.on("mapInfoPlayerPos", (mapData)=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(mapData);
    for (let i=0; i<mapData.length; i++){
      playerPositionUpdate(ctx, mapData[i], playerImgs[i]);
    }
  });
  socket.on("itsYourTurn", ()=>{
    console.log("it's my turn");
  });
    //socket.emit('moveTheFigure');
}
