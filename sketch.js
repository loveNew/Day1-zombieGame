var boy,boyImg,boyShootImg,bgImg,bg;
var edges,invi,bullet,bulletImg;
var zombieGroup,bulletGroup;
var zombie,zombieImg;

function preload(){
boyImg = loadImage("shooter_2.png");
bgImg = loadImage("bg.jpeg");
boyShootImg = loadImage("shooter_3.png");
zombieImg = loadImage("zombie.png");
}

function setup(){
createCanvas(1200,600);

invi = createSprite(600,200,1500,10);

bg = createSprite(600,300,1200,600);
bg.addImage(bgImg);

boy = createSprite(300,400,50,50);
boy.addImage(boyImg);
boy.debug = true;
boy.setCollider("rectangle",0,0,250,450);
boy.scale = 0.3;

zombieGroup = new Group();
bulletGroup = new Group();

edges = createEdgeSprites();
}

function draw(){
background("white");


if(keyDown(UP_ARROW)){
    boy.y = boy.y-5;
}
if(keyDown(DOWN_ARROW)){
    boy.y = boy.y+5;
}
if(keyDown(LEFT_ARROW)){
    boy.x = boy.x-5;
}
if(keyDown(RIGHT_ARROW)){
    boy.x = boy.x+5;
}
if(keyWentDown("space")){
   createBullets();
   boy.addImage(boyShootImg);

}
else if(keyWentUp("space")){
   boy.addImage(boyImg);
}


if(zombieGroup.isTouching(bulletGroup)){
  for(var i = 0; i<zombieGroup.length; i++){
  if(zombieGroup[i].isTouching(bulletGroup)){
  zombieGroup[i].destroy();
  bulletGroup.destroyEach();
  }
  }


}

boy.collide(edges);
boy.collide(invi);
spawnZombies();
drawSprites();

}

function createBullets(){

bullet = createSprite(boy.x,boy.y,8,5);
bullet.velocityX = 10;
bulletGroup.add(bullet);

}

function spawnZombies(){

if(frameCount % 50 === 0){
zombie = createSprite(random(820,1100),random(210,570),8,5);
zombie.addImage(zombieImg);
zombie.setCollider("rectangle",0,0,250,850);
zombie.scale = 0.1;
zombie.velocityX = -5;
zombie.lifetime = 300;
zombieGroup.add(zombie);

}
}