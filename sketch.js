
var box;


function setup(){
  createCanvas(400,400);
  
  box=createSprite(200,200,20,20);

}

function draw(){
  background("red");

if(keyIsDown(RIGHT_ARROW)){
 box.velocityX=2

}

if(keyIsDown(LEFT_ARROW)){
  box.velocityX=-2
}

if(keyIsDown(UP_ARROW)){
  box.velocityY=-2
}

if(keyIsDown(DOWN_ARROW)){
  box.velocityY=2
}



  drawSprites();
}