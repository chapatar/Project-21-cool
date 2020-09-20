var wall, thickness;

var bullet, speed, weight;

function setup() {
  createCanvas(1000,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,60,10);
  bullet.velocityX = speed
  bullet.shapeColor=color(200,200,200)

  wall = createSprite(900,200,thickness,height/2)
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  

  if(hasTouched(bullet, wall)){
     bullet.velocityX = 0;
     var damage = (0.5 * speed * speed * weight) / (thickness * thickness * thickness);

     if(damage < 10){
       bullet.shapeColor = color(0,255,0);
     }

     if(damage > 10){
       bullet.shapeColor = color(255,0,0);
     }
  }

  
  drawSprites();
}

function hasTouched(lbullet, lwall){
 bulletRightEdge = lbullet.x + lbullet.width;
 wallLeftEdge = lwall.x
 if (bulletRightEdge >= wallLeftEdge){
   return true;
 }
 return false;
 
}