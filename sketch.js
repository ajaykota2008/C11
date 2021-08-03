
var boy,boyImg;

var ground,groundImg;

var leftBoundary;

var rightBoundary;

function preload(){
  //pre-load images
  
  boyImg=loadAnimation("Runner-1.png","Runner-2.png");

 groundImg=loadImage("path.png");

}

function setup(){
  
  createCanvas(400,400);
  //create sprites here

  ground = createSprite(200,200,50,800);
  ground.velocityY = 4;
  ground.scale = 1.4;
  ground.addImage("path",groundImg);

  boy = createSprite(180,340,20,10);
 boy.scale = 0.08;
 boy.addAnimation("jackrunning",boyImg);

 rightBoundary = createSprite(400,0,100,800)
 rightBoundary.visible = false;

 leftBoundary = createSprite(0,0,100,800);
 leftBoundary.visible = false;


}

function draw() {
  
  background(0);

  if(ground.y>400){
    ground.y = height/2;
    }
    
    boy.x = World.mouseX;

    edges = createEdgeSprites();
    boy.collide(leftBoundary);
    boy.collide(rightBoundary);
    
    drawSprites();
}

  

