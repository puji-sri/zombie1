var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieImg,zombieGroup,zombie;


function preload(){
  
  shooterImg = loadImage("../assets/shooter_2.png")
  shooter_shooting = loadImage("../assets/shooter_3.png")

  bgImg = loadImage("../assets/bg.jpeg")
  zombieImg = loadImage("../assets/zombie.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
 player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
   player.scale = 0.3
 
   zombieGroup = new Group();

   //player.debug = true
    player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
   player.setCollider("rectangle",0,0,300,300);
  // player.Setcollider("rectangle",0,0,300,300)
 
    zombieGroup = new Group();

}


function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyDown("space")){
  //player.addImage( shooter_shooting )
 // player.addImage()
 player.addImage(shooterImg);
 //player.addImage(shooter_1.png)


 }
 spawnZombies();

drawSprites();

}
function spawnZombies(){
  if(frameCount % 60 === 0){
  //giving random x and y positions for zombie to appear
  zombie = createSprite(displayWidth - 200,displayHeight- 300,40,40)
   zombie.y =Math.round(random(350,500));
  zombie.addImage(zombieImg)
  zombie.scale = 0.15
  zombie.velocityX = -3
  zombie.debug= false
  zombie.setCollider("rectangle",0,0,400,400)

 
  
 
  zombie.lifetime = 250;
 zombieGroup.add(zombie)
}
    }