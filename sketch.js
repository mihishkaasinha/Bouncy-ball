//Matter.js - World, Engine, Bodies
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine, object, ball, ball_options;



function setup() {
createCanvas(400,400);

//create the engine
engine = Engine.create();

//add engine to the world
world = engine.world;

var options = { 
isStatic: true

}

//create the variable ball_options
ball_options = 
{
  restitution : 1.0
}

//create the bodies
object = Bodies.rectangle(200,390,60,80,options);
ball = Bodies.circle(200, 200, 15, ball_options);

//add body to the world
World.add(world, object);
World.add(world, ball);
  
console.log(object);
}

function draw() {
  background(0);  
Engine.update(engine);

  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,50);
  ellipse(ball.position.x, ball.position.y, 25, 25);
}