var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var snow = [];
function preload() {
  bgImage =loadImage("snow3.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  
}

function draw() {
  background(bgImage);  
  
  Engine.update(engine);

  if (frameCount%60===0){
    snow.push(new Snow(random(width/2-100,width/2+100),10,10));
  }
  for (var z = 0; z < snow.length; z++) {
    snow[z].display();
  }

}