var player, hunter;


function preload() {
  background1img = loadImage("images/background1.jpg");
  playerImg = loadAnimation("images/Hunter 1.png","images/Hunter 2.png","images/Hunter 3.png")
  hunterImg = loadAnimation("images/ENEMY 1.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bg =createSprite(width/2,height/2-130);
  bg.addImage(background1img);
  bg.scale = 1.4;
  bg.velocityX = -5;


  hunter = createSprite(width/2, height-160, 50, 100);  
  hunter.addAnimation("escape", hunterImg);
  hunter.scale = 0.8;

  player = createSprite(100, height-160, 50, 100); 
  player.addAnimation("running", playerImg);
} 

function draw() {
  background("green");  

  if(bg.x < 660) {
    bg.x = width/2; 
  }

  player.x = camera.position.x-500;
  hunter.x = camera.position.x;
  

  drawSprites();
}