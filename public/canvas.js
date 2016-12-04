'use strict'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const playerPositionUpdate = (canvas, fieldN, playerImg)=>{
  let x = 631 ,y = 650;
  if (fieldN > 0 && fieldN < 10){
    y = 650;
    x = 609-(58*fieldN)+5;
  }
  else if (fieldN === 10){
    y = 650;
    x = 15;
  }
  else if (fieldN > 10 && fieldN < 20){
    x = 15;
    y = 609-(58*(fieldN%10))+5;
  }
  else if (fieldN === 20){
    x=15;
    y=15;
  }
  else if (fieldN > 20 && fieldN < 30){
    y=15;
    x=37+(58*(fieldN%10));
  }
  else if (fieldN === 30){
    y=15;
    x=631;
  }
  else if (fieldN > 30 && fieldN < 40){
    x=631;
    y=37+(58*(fieldN%10));
  }
  ctx.drawImage(playerImg, x, y, 50, 50);
};
