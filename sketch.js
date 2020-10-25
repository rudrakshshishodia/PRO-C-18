var bananaImage,obstacleImage,obstaclegroup,score;
var bananagroup,player_running,area;
var player,bananas,ground;


function preload() {
  
  //this is background image
  cover=loadImage("jungle.jpg");
  
   //loading the animation for the monkey
 player_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
 //this is for banana image
  bananaImage=loadImage("banana.png");
  
  //this is for obstacle image
  obstacleImage=loadImage("stone.png");
  
  //you cannot write anything else in the function preload
  //this is for score on background
  //stroke("white");
  //textSize("20");
  //fill("yellow");
  //text("Score; "+ score,500,50);
  
  
  
  
}

function setup() {
  createCanvas(400, 400);
  
  //creating the background
  area=createSprite(200,200,20,20);
  area.addImage("behind",cover);
  area.velocityX=-2;
  area.x=area.width/2;
  
//this is for monkey sprite
player=createSprite(50,180,20,50);
player.addAnimation("person",player_running);
player.scale=0.2;
  
  
   
  //this is for ground
  ground = createSprite(200,380,400,20);
  ground.visible=false;
  
  //this is for score
  score=0;
  
  //these are our game group
  obstaclegroup = new Group();
  bananagroup = new Group();
  
  stroke("white");
  textSize("20");
  fill("yellow");
  text("Score; "+ score,500,50);
}

function draw() {
  background(220);
  drawSprites();
  spawnbanana();

  

  //setting the animation for the background to move;
  if (area.x < 0) {
   area.x=area.width/2;
  }
    
    //to jump monkey
  if(keyDown("space")){
    player.velocityY = -10;
  }


   //to provide the gravity for the monkey
  player.velocityY =player.velocityY + 0.9;


 //to make the banana disappear when the monkey touches it
  if(bananagroup.isTouching(player)){
    score= score + 2;
    bananagroup.destroyEach();
  }





//to make the monkey stand on the screen
  player.collide(ground);

//make size bigger
    switch(score){
      case 10:player.scale=0.12;
        break;
      case 20:player.scale=0.14;
        break;
      case 30:player.scale=0.16;
        break;
      case 40:player.scale=0.18;
        break;
      case 50:player.scale=0.20;
        break;
      case 60:player.scale=0.22;
        break;
        default:break;
        
    }
} 

function spawnbanana(){ 
  

    
  //to make the bananas display 
  if(frameCount%100 === 0){
    
    //this is for bananas
    bananas=createSprite(330,200,5,5);
    
    //to add the image banana to the sprite
    bananas.addImage("fruit", bananaImage);
    
    //to scale the banana to a small size
    bananas.scale=0.05;
    
    //to give the negative velocity
    bananas.velocityX = -2;
    
    //to add the bananas to the group
    bananagroup.add(bananas);
    bananagroup.setLifetimeEach(165);
  }
}

function spawnobstacle(){
  //this is for obstacles
  var obstacle=createSprite(330,350,10,7);
  
  //adding image
  obstacle.addImage("stones" , obstacleImage);
  
  //this is for obstacle sie
  obstacle.scale=0.10;
  
  //to move obstacle
  obstacle.velocityX=-2;
  
  //to add obstacle to the group
  obstaclegroup.add(obstacle);
  obstaclegroup.setLifetimeEach(165);
  
}
