var bgsprite,ladybug;
var coin;
var interval=20;
var x=100;
var y=200;
var dx=100/1000; // px/1000millis
var dy=100/1000;

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var w=canvas.getAttribute("width") || 0;
var h=canvas.getAttribute("height") || 0;


function preload(){
  bg =loadImage("imagefolder/bg7.png");
  bugImg =loadAnimation("imagefolder/lady3_f.png", "imagefolder/lady1_f.png");
}


function init()
  {
    context= myCanvas.getContext('2d');
    (function animloop(){

      requestAnimFrame(animloop);
      draw();
      setTimeout(animLoop, 1);

    })();

  }

function setup() {
  createCanvas(800,400);
  bgsprite= createSprite(200, 200, 200, 200);
  bgsprite.addImage(bg);
  bgsprite.velocityY=-2;
  ladybug=createSprite(300,200,40,200);
  ladybug.addAnimation("running",bugImg)
}
var prevTime = +(new Date)
function draw() {
  

  background(255,255,255);  
  if(bgsprite.y<50){
  bgsprite.y=100;
  }
  if(keyDown("RIGHT_ARROW")){
    ladybug.x=ladybug.x+2
  }
  if(keyDown("LEFT_ARROW")){
    ladybug.x=ladybug.x-2
  }
  spawncoins();
  drawSprites();
}
function spawncoins(){
  if(frameCount%60=== 0){
    coin=createSprite(random(50,750),0,20,20);
    coin.velocityY=3;
  }
}