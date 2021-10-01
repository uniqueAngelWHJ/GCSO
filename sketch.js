var car, wall;
var speed, weight;



function setup() {
  createCanvas(1600,400);
car=createSprite(200, 200, 50, 50);
wall = createSprite(1200, 200, 60, 100);

car.velocityX = 5;


speed = random(25,31);
weight=createSprite(400,1500);
}

function draw() {
  background("black");  

  if (wall.x-car.x < (car.width+wall.width)/2)
  {
car.velocity=0;
var deformation = 0.5*weight*speed*speed/22509;
if(deformation>108) {
car.shapeColor = "red";
}
if(deformation<180 && deformation>100){
car.shapeColor= "yellow";
}
if (deformation<100){
car.shapeColor = "green";
 }
}

drawSprites();
}