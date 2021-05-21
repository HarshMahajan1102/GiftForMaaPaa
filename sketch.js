var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;

var database;
var allPlayers;
var form, player, game, bg, gb;

var video;
var flag=0
var positionFlag=0

function setup(){
  canvas = createCanvas(displayWidth - 30, displayHeight - 130);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  bg = loadImage('images/BG2.jpg');

 }

function draw(){
  background(bg);
   
}

/*
function mouseDragged() {
  console.log("preessed")
  if(flag===1){
    video.play();
    console.log("video staterd")
  }
}
*/