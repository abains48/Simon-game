var gameOn = false;

var colorArray = ["green", "red", "yellow", "blue"];

var sequence = [];
var userPattern = [];
var level = 0;


$(document).on("keydown", function() {
  if (!gameOn) {
    nextColor();
    gameOn=true;
  }
});


$(".btn").on("click", function() {
  userPattern.push(this.id);
  animationButton(this.id);
  playSound(this.id);
  answerCheck(userPattern.length-1);
});


function answerCheck(level) {
  if (sequence[level]===userPattern[level]) {
    if (userPattern.length === sequence.length){
        setTimeout(function () {
          nextColor();
        }, 1000);
      }
  }
    else {
    playSound("wrong");
    setTimeout(function() {
      startAgain();
    },200);
  }
}




function nextColor() {
  level += 1;
  $("h1").text("Level " + level);
  userPattern = [];
  var randomNum = Math.random();
  var inRangeNum = Math.floor(randomNum * 4);
  var newColor = colorArray[inRangeNum];
  sequence.push(newColor);
  animationButton(newColor);
  playSound(newColor);
}


function animationButton(color) {
  $("#" + color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(idColor) {
  var audio = new Audio("sounds/" + idColor + ".mp3");
  audio.play();
}

function startAgain() {
  sequence =[];
  userPattern=[];
  level=0;
  $("h1").text("Game Over! Press Any key to restart!");
  gameOn=false;
}

// function answerCheck(level) {
//   userPattern=[];
//   for(var i = 0; i < level; i++) {
//     if (sequence[i]===userPattern[i]) {
//       setTimeout(function() {
//       },1000);
//     } else {
//       playSound("wrong");
//       setTimeout(function() {
//         startAgain();
//         return;
//       },200);
//     }
//   }
//   nextColor();
// }
