const playerPositionUpdate = (canvas, fieldN, playerImg)=>{
  /*const figure = new Image();
  figure.src = playerImg;*/
  let x =0 ,y = 0;
  if (fieldN >= 0 && fieldN <= 10){
    y = 650;
    x = 650-(54*fieldN);
  }
  //x and y have to be changed depending on fieldN
  //context.drawImage(figure, x, y);
  canvas.fillRect(x,y,25,25);
};
