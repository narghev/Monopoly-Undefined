const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const playerPositionUpdate = (canvas, fieldN, playerImg)=>{
  const figure = new Image();
  figure.src = playerImg;
  let x =0 ,y = 0;
  if (fieldN >= 0 && fieldN <= 10){
    y = 650;
    x = 650-(54*fieldN);
  }
  //x and y have to be changed depending on fieldN
  figure.onload = () => {
    ctx.drawImage(figure, x, y, 50, 50);
  }
};
