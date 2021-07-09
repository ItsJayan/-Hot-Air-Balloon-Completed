var balloon,balloonImg;
var birdGroup
var  background,backgroundImg;
var birdImage
var gameState=1
var lifeCount=0;
var gameOverImg
function preload() {
  balloonImg = loadImage("balloon01.png");
  backgroundImg = loadImage("background.png");
  birdImage = loadAnimation("bird4.png","bird1.png","bird3.png","bird2.png")
  gameOverImg = loadImage("gameOver.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight-10);

  background = createSprite(0,0,width,height/2);
  background.addImage("city", backgroundImg)
  background.x = 0;
 // background.scale = 0.6
  
  balloon = createSprite(250,height-200,20,20);
  balloon.addImage(balloonImg,"Balloon");
  balloon.scale = 0.3;

  
    
birdGroup = new Group ()

}

function draw() {
 
if(gameState===1){
 background.velocityX = -2;
  if(balloon.isTouching(birdGroup))(
    checkForLifeCount()
  )

  if(background.x <10){
    background.x = background.width/2;

  }

  

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
    }
 if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
}
if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
    balloon.scale = 0.35;
}
if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
    balloon.scale = 0.25;
  }

spawnBirds();
}
if(gameState===2){
  //end the game
  birdGroup.destroyEach();
  balloon.destroy();
  background.velocityX = 0;

  gameOver = createSprite(width/2, height/2)
gameOver.addImage(gameOverImg)
}
  drawSprites();
  fill("black");
  textSize(25)
  text("Use Arrow Keys to move the Balloon!",10,30);
}


function checkForLifeCount(){

lifeCount++;
console.log(lifeCount);
if(lifeCount===3){
  gameState=2
}
else
{
  gameState=1

  balloon.x=250
  balloon.y=height-200
}



}
function spawnBirds() {
  //write code here to spawn the birds
  if (frameCount % 80 === 0) {
     bird = createSprite(0,100,40,10);
    bird.y = Math.round(random(60,height/2));
    bird.addAnimation("bird",birdImage);
    bird.scale = 0.3;
    bird.velocityX = 6;
    
     //assign lifetime to the variable
    bird.lifetime = width/3;
    
    
    //adding bird to the group
   birdGroup.add(bird);
    }
}
