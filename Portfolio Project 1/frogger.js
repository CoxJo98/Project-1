const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');
const logsleft = document.querySelectorAll('.log-left');
const logsright = document.querySelectorAll('.log-right');
const carsleft = document.querySelectorAll('.car-left');
const carsright = document.querySelectorAll('.car-right');

console.log(squares);
var currentIndex = 76;
var width = 9;
var timerId; 
var currentTime =20;
var outcomeTimerId;

function moveFrogger(e){
squares[currentIndex].classList.remove('frog');

switch(e.key){
case 'ArrowLeft' :
console.log('move left');
if(currentIndex % width !== 0)
currentIndex -=  1;
break;

case 'ArrowRight' :
console.log('move right');
if(currentIndex % width < width - 1)
currentIndex +=  1;
break;

case 'ArrowUp' :
console.log('move up');
if(currentIndex - width >= 0)
currentIndex -= width;
break;

case 'ArrowDown' :
console.log('move down');
if(currentIndex + width <( width* width))
currentIndex += width;
break;
}

squares[currentIndex].classList.add('frog');

}


function motionObjects(){
currentTime --;
timeLeftDisplay.textContent = currentTime;
logsleft.forEach(logLeft => moveLogLeft(logLeft));
logsright.forEach(logRight => moveLogRight(logRight));
carsleft.forEach(carLeft => moveCarLeft(carLeft));
carsright.forEach(carRight => moveCarRight(carRight));
}

function checkHits(){
gameOver();
winner();
}


function moveLogLeft(logLeft){
switch(true) {
case logLeft.classList.contains('l1'):
logLeft.classList.remove('l1');
logLeft.classList.add('l2');
break;

case logLeft.classList.contains('l2'):
logLeft.classList.remove('l2');
logLeft.classList.add('l3');
break;

case logLeft.classList.contains('l3'):
logLeft.classList.remove('l3');
logLeft.classList.add('l4');
break;

case logLeft.classList.contains('l4'):
logLeft.classList.remove('l4');
logLeft.classList.add('l5');
break;

case logLeft.classList.contains('l5'):
logLeft.classList.remove('l5');
logLeft.classList.add('l1');
break;

}

}

function moveLogRight(logRight){
switch(true) {
case logRight.classList.contains('l1'):
logRight.classList.remove('l1');
logRight.classList.add('l5');
break;

case logRight.classList.contains('l2'):
logRight.classList.remove('l2');
logRight.classList.add('l1');
break;

case logRight.classList.contains('l3'):
logRight.classList.remove('l3');
logRight.classList.add('l2');
break;

case logRight.classList.contains('l4'):
logRight.classList.remove('l4');
logRight.classList.add('l3');
break;

case logRight.classList.contains('l5'):
logRight.classList.remove('l5');
logRight.classList.add('l4');
break;

}

}

function moveCarLeft(carLeft){
switch(true) {
case carLeft.classList.contains('c1'):
carLeft.classList.remove('c1');
carLeft.classList.add('c2');
break;

case carLeft.classList.contains('c2'):
carLeft.classList.remove('c2');
carLeft.classList.add('c3');
break;

case carLeft.classList.contains('c3'):
carLeft.classList.remove('c3');
carLeft.classList.add('c1');
break;

}

}

function moveCarRight(carRight){
switch(true) {
case carRight.classList.contains('c1'):
carRight.classList.remove('c1');
carRight.classList.add('c3');
break;

case carRight.classList.contains('c2'):
carRight.classList.remove('c2');
carRight.classList.add('c1');
break;

case carRight.classList.contains('c3'):
carRight.classList.remove('c3');
carRight.classList.add('c2');
break;

}

}

function gameOver(){
if ( 
     squares[currentIndex].classList.contains('c1') ||
      squares[currentIndex].classList.contains('l4') || 
     squares[currentIndex].classList.contains('l5') ||
     currentTime <= 0
   )
{
resultDisplay.textContent = 'You Lose!, You got hit or fell in the river!';
clearInterval(timerId);
clearInterval(outcomeTimerId);
squares[currentIndex].classList.remove('frog');
document.removeEventListener('keyup', moveFrogger);

}

}

function winner(){
if( squares[currentIndex].classList.contains('ending-block'))
{
resultDisplay.textContent = 'You Win!';
clearInterval(timerId);
clearInterval(outcomeTimerId);
document.removeEventListener('keyup', moveFrogger);
}
}

startPauseButton.addEventListener
(
'click',() => { 
console.log('timerId', timerId);
if(timerId) {
clearInterval(timerId);
clearInterval(outcomeTimerId);
outcomeTimerId = null;
timerId = null;
document.removeEventListener('keyup', moveFrogger);
} else {
timerId =setInterval(motionObjects, 1000);
outcomeTimerId = setInterval(checkHits, 50);
document.addEventListener('keyup', moveFrogger);}
});

