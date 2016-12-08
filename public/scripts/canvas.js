'use strict'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const playerPositionUpdate = (canvas, fieldN, playerImg)=>{
  let x = 838.3285714285714466 ,y = 863.57142857142859;
  if (fieldN > 0 && fieldN < 10){
y = 863.57142857142859;
x = 809.1000000000000174-(77.0571428571428588*fieldN)+6.642857142857143;
  }
  else if (fieldN === 10){
y = 863.57142857142859;
x = 19.928571428571429;
  }
  else if (fieldN > 10 && fieldN < 20){
x = 19.928571428571429;
y = 809.1000000000000174-(77.0571428571428588*(fieldN%10))+6.642857142857143;
  }
  else if (fieldN === 20){
x=19.928571428571429;
y=19.928571428571429;
  }
  else if (fieldN > 20 && fieldN < 30){
y=19.928571428571429;
x=49.1571428571428582+(77.0571428571428588*(fieldN%10));
  }
  else if (fieldN === 30){
y=19.928571428571429;
x=838.3285714285714466;
  }
  else if (fieldN > 30 && fieldN < 40){
x=838.3285714285714466;
y=49.1571428571428582+(77.0571428571428588*(fieldN%10));
  }
  ctx.drawImage(playerImg, x, y, 50,50 );
};
