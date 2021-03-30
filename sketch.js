var spacecraft, spacecraftImg;
var asteroid, asteroidImg, asteroidGroup;
var bgImg;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
  spacecraftImg = loadImage("spacecraft.png");
  asteroidImg = loadImage("asteroid.png");
  
  bgImg = loadImage("space.jpg");
}

function setup() {
  createCanvas(800, 800);
  
  spacecraft = createSprite(75, 400, 85, 85);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale = 0.3;
  
  asteroidGroup = new Group();
}

function draw() {
  background(bgImg);
  
  if (gameState === PLAY) {
    if (keyDown("up")) {
      spacecraft.y = spacecraft.y - 4;
    }
    if (keyDown("down")) {
      spacecraft.y = spacecraft.y + 4;
    }
    
    spawnAsteroids();
    
    if (asteroidGroup.isTouching(spacecraft)) {
      gameState = END;
    }
  }
  if (gameState === END) {
    textSize(100);
    fill("black");
    text("GAME OVER", 50, 400);
    
    spacecraft.hide();
  }
  
  drawSprites();
}

function spawnAsteroids() {
  if (frameCount % 60 === 0){
  var asteroid = createSprite(800,Math.round(random(20, 770)), 10, 10);
  asteroid.addImage(asteroidImg);
  asteroid.velocityX = -5;
  asteroid.lifetime = 150;
  asteroid.scale = 0.219;
  asteroidGroup.add(asteroid);
  }
}