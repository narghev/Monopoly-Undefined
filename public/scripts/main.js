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
  window.property = JSON.parse(playerData).socketProperty; //has to be in the player information, top left corner, REACT
  renderMoney();
  renderPropertyDropDown();
});
socket.on("diceResults", (dice1, dice2)=>{
  window.d1 = dice1;
  window.d2 = dice2;
  renderDiceResults();
});
socket.on("getTheCard", (text)=>{
  window.cardText = text;
  showCard();
});

window.onload = ()=>{
  document.getElementById("diceBtn").setAttribute("style", "left: "+(100+canvas.width)+"px;");
  socket.on("mapInfoPlayerPos", (mapData)=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    window.mapData = mapData;
    for (let i=0; i<mapData.length; i++){
      playerPositionUpdate(ctx, mapData[i], playerImgs[i]);
    }

  });
  socket.on("whoseTurn", (n)=>{
    whoseTurn(n+1);
  });
  socket.on("gameStarted", ()=>{
    document.getElementById("diceBtn").setAttribute("onclick", "socket.emit('moveTheFigure')");
  });
  socket.on("itsYourTurn", ()=>{
    yourTurnAnimation();
  });
  socket.on("notYourTurn", (n)=>{
    notYourTurnAnimation(n);
  });
  socket.on("imprisoned", (n)=>{
  });
  socket.on("buyMe?", (n)=>{
    askPlayer();
  });
  socket.on("cantAfford", ()=>{
  });
  socket.on("fieldAction", ()=>{
    socket.emit("fieldActionReady");
  });
  socket.on("knowYourself", (n)=>{
    window.myN = n;
    renderMyPic();
  });
  socket.on("outOfJail", ()=>{
    outOfJail();
  });
  socket.on("broke", ()=>{
  });
  socket.on("gethNhN", (arr)=>{
    window.houseN = arr[0];
    window.hotelN = arr[1];
    renderPropertyInfo();
  });
}
