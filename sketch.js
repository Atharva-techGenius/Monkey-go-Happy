var monkey , monkeyRunning;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkeyRunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500);
  monkey = createSprite(130,340,10,10);
  monkey.addAnimation("running",monkeyRunning);
  monkey.scale = 0.2;
  
  ground = createSprite(200,410,600,20);
  ground.x = ground.width /2;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  
  background("red");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/getFrameRate());
  text("Survival Time :" + survivalTime,240,30);
  
  
  if(keyDown("space")&& monkey.y >= 330) {
        monkey.velocityY = -14;
       
      }
  
   monkey.velocityY = monkey.velocityY + 0.4;
  
  Food();
  obstacle();
  
  monkey.collide(ground);

  drawSprites();
  
  
}


function Food(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(590,450,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
  }
  
}
  
  function obstacle(){
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(590,350,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3;
    obstacle.velocityX = -6;
    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
  }
  
}



