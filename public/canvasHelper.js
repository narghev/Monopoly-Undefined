const canvasHelper = document.getElementById('canvasHelper');
const ctxH = canvasHelper.getContext('2d');
const gradient = ctxH.createLinearGradient(0, 0, canvasHelper.width, 0);
const ban = new Image();
ban.src = "notYourTurn.png";
const yourTurnAnimation = ()=>{
  gradient.addColorStop("0", "red");
  gradient.addColorStop("0.5", "orange");
  gradient.addColorStop("1.0", "yellow");
  ctxH.clearRect(0,0,canvasHelper.width, canvasHelper.height);
  ctxH.fillStyle = "rgba(0, 0, 0, " + 0.9 + ")";
  ctxH.fillRect(0,0,canvasHelper.width, canvasHelper.height);
  ctxH.rotate(25*Math.PI/180);
  ctxH.font = "100px Verdana";
  ctxH.fillStyle = gradient;
  ctxH.fillText("It's Your Turn!", 180, 200);
  const animationTimeout = setTimeout(()=>{
    ctxH.rotate(-25*Math.PI/180);
    ctxH.clearRect(0,0,canvasHelper.width, canvasHelper.height);
  },2000);
};
const notYourTurnAnimation = (n)=>{
  gradient.addColorStop("0", "#cc0000");
  gradient.addColorStop("0.5", "#ffcc00");
  gradient.addColorStop("1.0", "#000099");
  ctxH.clearRect(0,0,canvasHelper.width, canvasHelper.height);
  ctxH.fillStyle = "rgba(0, 0, 0, " + 0.9 + ")";
  ctxH.globalAlpha = 0.7;
  ctxH.fillRect(0,0,canvasHelper.width, canvasHelper.height);
  ctxH.drawImage(ban, 200,200,300,300);
  ctxH.globalAlpha = 1.0;
  ctxH.rotate(25*Math.PI/180);
  ctxH.font = "100px Verdana";
  ctxH.fillStyle = gradient;
  ctxH.fillText("It's Player"+n+"'s turn!", 105, 200);
  const animationTimeout = setTimeout(()=>{
    ctxH.rotate(-25*Math.PI/180);
    ctxH.clearRect(0,0,canvasHelper.width, canvasHelper.height);
  },3000);
};
const showCard = (text)=> {
  ctxH.clearRect(0,0,canvasHelper.width, canvasHelper.height);
  ctxH.fillStyle = "rgba(0, 0, 0, " + 0.9 + ")";
  ctxH.fillRect(0,0,canvasHelper.width, canvasHelper.height);
  ctxH.fillStyle = "#f5dd33";
  ctxH.fillRect(50,200,610,310);
  ctxH.fillStyle = "black";
  ctxH.strokeRect(60,210,590,290);
  ctxH.font = "30px Verdana";
  ctxH.fillText(text, 75, 350, 565);
  const cardTimeout = setTimeout(()=>{
    ctxH.clearRect(0,0,canvasHelper.width, canvasHelper.height);
  },5000);
  document.getElementById("canvasHelper").setAttribute("onclick", "ctxH.clearRect(0,0,canvasHelper.width, canvasHelper.height)");
};
const whoseTurn = (n)=>{
  gradient.addColorStop("0", "green");
  gradient.addColorStop("1.0", "orange");
  ctxH.clearRect(0,0,canvasHelper.width, canvasHelper.height);
  ctxH.fillStyle = "rgba(0, 0, 0, " + 0.9 + ")";
  ctxH.fillRect(0,0,canvasHelper.width, canvasHelper.height);
  ctxH.font = "50px Verdana";
  ctxH.fillStyle = gradient;
  ctxH.fillText("It's Player"+n+"'s Turn!", 180, 350);
  const animationTimeout = setTimeout(()=>{
    ctxH.clearRect(0,0,canvasHelper.width, canvasHelper.height);
  },2000);
};
