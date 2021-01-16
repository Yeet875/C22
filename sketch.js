const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world;

var ground_options={
  isStatic: true
}
var ball_options ={
  restitution:1.0
}
ground = Bodies.rectangle(200,390,200,20,ground_options);
World.add(world,ground);

ball = Bodies.circle(200,100,15,ball_options); 
World.add(world,ball)
//console.log(object)
//console.log(object.position.x);
}

function draw() {
  background(0,0,0); 
  rectMode(CENTER) ;
  Engine.update(engine);
rect(ground.position.x,ground.position.y,400,50)

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,15,15)
}