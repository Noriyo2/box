var box;
var box2;

function setup() {
  createCanvas(400,400); 
  
  box=createSprite(200,200,20,20);
  box.shapeColor="aqua";
  box2=createSprite(100,100,20,20)
  box2.shapeColor="blue"
}

function draw() {
  background(30);

  if(keyDown(RIGHT_ARROW)){
    box.x=box.x+5;
  }
  if(keyDown(UP_ARROW)){
    box.y=box.y-5;
  }
  if(keyDown(LEFT_ARROW)){
    box.x=box.x-5;
  }
  if(keyDown(DOWN_ARROW)){
    box.y=box.y+5;
  }
  drawSprites()
}



