var bg,sleep,brush,gym,eat,drink,move,bath;
var back,astronaught;

function preload(){
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png","images/move1.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
}


function setup() {
  createCanvas(400, 400);
   back = createSprite(200,200,400,400);
   back.addImage(bg);

   astronaught = createSprite(150,230);
   astronaught.addAnimation("sleeping",sleep);
   astronaught.scale=0.1;

  //edges = createEdgeSprites();
  astronaught.setCollider("rectangle",0,0,astronaught.width,astronaught.height);
}

function draw() {
  background(220);
  //astronaught.collide(edges[4]);
  if(keyDown(UP_ARROW)){
    astronaught.addAnimation("brushing",brush)
    astronaught.changeAnimation("brushing",brush);
    astronaught.x=150
    astronaught.y=150;
    astronaught.velocityX=0;
    astronaught.velocityY=0;
    
  }
  if(keyDown(DOWN_ARROW)){
    astronaught.addAnimation("gyming",gym)
    astronaught.changeAnimation("gyming",gym);
    astronaught.x=150
    astronaught.y=150;
    astronaught.velocityX=0;
    astronaught.velocityY=0;
  }
  if(keyDown(LEFT_ARROW)){
    astronaught.addAnimation("eating",eat);
    astronaught.changeAnimation("eating",eat);
    astronaught.x=150
    astronaught.y=150;
    astronaught.velocityX=0;
    astronaught.velocityY=0;
  }
  if(keyDown(RIGHT_ARROW)){
    astronaught.addAnimation("bathing",bath);
    astronaught.changeAnimation("bathing",bath);
    astronaught.x=150
    astronaught.y=50;
    astronaught.velocityX=0;
    astronaught.velocityY=0;
  }
  if(keyDown("M")){
    astronaught.addAnimation("moving",move);
    astronaught.changeAnimation("moving",move);
    astronaught.x=150
    astronaught.y=350;
    astronaught.X=astronaught.x-5;
    astronaught.Y=astronaught+3;
  }

  drawSprites();

}