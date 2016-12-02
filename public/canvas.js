const playerPositionUpdate = (fieldN, playerImg)=>{
  const figure = new Image();
  figure.src = playerImg;
  const x;
  const y;
  //x and y have to be changed depending on fieldN
  context.drawImage(figure, x, y);
};
