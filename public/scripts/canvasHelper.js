const canvasHelper = document.getElementById('canvasHelper');
const ctxH = canvasHelper.getContext('2d');
const gradient = ctxH.createLinearGradient(0, 0, canvasHelper.width, 0);
const ban = new Image();
ban.src = "imgs/notYourTurn.png";
const yourTurnAnimation = ()=>{
  gradient.addColorStop("0", "red");
  gradient.addColorStop("0.5", "orange");
  gradient.addColorStop("1.0", "yellow");
  ctxH.clearRect(0,0,canvasHelper.width, canvasHelper.height);
  ctxH.fillStyle = "rgba(0, 0, 0, " + 0.9 + ")";
  ctxH.fillRect(0,0,canvasHelper.width, canvasHelper.height);
  ctxH.font = "75px Verdana";
  ctxH.fillStyle = gradient;
  ctxH.fillText("It's Your Turn!", 180, 350);
  const animationTimeout = setTimeout(()=>{
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
  ctxH.drawImage(ban, 200,200,200,200);
  ctxH.globalAlpha = 1.0;
  ctxH.font = "75px Verdana";
  ctxH.fillStyle = gradient;
  ctxH.fillText("It's Player"+n+"'s turn!", 180, 350);
  const animationTimeout = setTimeout(()=>{
    ctxH.clearRect(0,0,canvasHelper.width, canvasHelper.height);
  },3000);
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

const outOfJail = ()=>{
  gradient.addColorStop("0", "blue");
  gradient.addColorStop("1.0", "red");
  ctxH.clearRect(0,0,canvasHelper.width, canvasHelper.height);
  ctxH.fillStyle = "rgba(0, 0, 0, " + 0.9 + ")";
  ctxH.fillRect(0,0,canvasHelper.width, canvasHelper.height);
  ctxH.font = "50px Verdana";
  ctxH.fillStyle = gradient;
  ctxH.fillText("Pay 50$ and be free!", 180, 350);
  const animationTimeout = setTimeout(()=>{
    ctxH.clearRect(0,0,canvasHelper.width, canvasHelper.height);
  },2000);
  console.log("out")
};
