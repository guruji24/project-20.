var car,wall,speed,weight;

function setup() {
  createCanvas(800,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(100,200);
  car.scale = 0.5;
  car.shapeColor = "purple";

  wall = createSprite(700,200,50,400);

  
}

function draw() {
  background(0);  

  car.velocityX = speed;

  car.depth = wall.depth;
  car.depth = car.depth+1;

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation<100){
      car.shapeColor = "green";
      textSize(20);
      text("car just got some scratches",400,200);
      textSize(15);
      text("refresh the page to do another car test",400,100);
    }else if(deformation>100&&deformation<180){
      car.shapeColor = "yellow";
      textSize(20);
      text("car is half-broken",400,200);
      textSize(15);
      text("refresh the page to do another car test",400,100);
    }else if(deformation>180){
      car.shapeColor = "red";
      textSize(20);
      text("car is fully broken,too low quality",400,200);
      textSize(15);
      text("refresh the page to do another car test",400,100);
    }
  }
  
  drawSprites();
}