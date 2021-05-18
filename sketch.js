var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;

var database;
var allPlayers;
var form, player, game, bg, gb;


function setup(){
  canvas = createCanvas(displayWidth - 30, displayHeight - 130);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bg = loadImage('images/bg.jpg');
  gb = loadImage('images/gb.png');
  // form.func();
}


function draw(){
  background(bg);
   
}
