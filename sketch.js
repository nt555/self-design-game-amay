var gameState = 0
var bg1 
var player;
var playerStanding, playerRunning1,playerRunning2
var g

function preload(){
  bg1 = loadImage("playerhouse.png")
  playerStanding = loadImage("PlayerStanding.png")
  

}
function setup(){
  createCanvas(1500,800)
  player = createSprite(740,555,10,10)
  player.addImage(playerStanding)
  player.debug = true
  player.setCollider("rectangle",20,10,105,194)
  
  var g = createSprite(750,670,1500,10)
  
}


function draw() {
  background("black")
  if(keyDown("space")){
    player.x = player.x + 5
  }

  
  text(mouseX + "," + mouseY,mouseX,mouseY)
  drawSprites()
}
