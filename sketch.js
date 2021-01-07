var player;
var enemy;
var enemy2;
var platform;
var platform2;
var score = 0;




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	platform=createSprite(100,350,150,25);
	platform2=createSprite(300,200,150,25);
	platform.velocityY = 2;
	platform2.velocityY = 2;
	
	player=createSprite(100,30,30,30);

	



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

	
  player.collide(platform);
  player.collide(platform2);
  
text("Score:"+score,30,30)


 
  
  SpawnPlatform();
  controlPlayer();
  drawSprites();
 
}


function SpawnPlatform() {

	

	if(platform.y>=700) {
		platform.y= -10;
		platform.x= Math.round(random(1,800));
		//enemy=createSprite(platform.x,platform.y-30,40,40);
		enemy=createSprite(platform.x,platform.y-30,40,40);
		enemy.x = enemy.x - 2;
		enemy.velocityY = 2;
		enemy.shapeColor = "red";
		score = score+1

		
	}



	if(platform2.y>700) {
		platform2.y= -10;
		platform2.x= Math.round(random(1,800));
		enemy2=createSprite(platform2.x,platform2.y-30,40,40);
		enemy2.velocityY = 2;
		score = score+1
		if(player.isTouching(enemy2)) {
			score = score+1
			enemy2.visible = false;
		}
	}
	
	
}


function controlPlayer() {

	if(keyDown(UP_ARROW)) {
		player.velocityY = -6;

	}

	if(keyDown(DOWN_ARROW)) {
		player.velocityY = 0;
		player.velocityX = 0;
	}

	if(keyDown(LEFT_ARROW)) {
		player.velocityX = -4;
	}

	if(keyDown(RIGHT_ARROW)) {
		player.velocityX = 4;
	}

	player.velocityY = player.velocityY + 0.5;

	
}






