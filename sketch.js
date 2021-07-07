const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var umber;

var maxDrops =100;

var drops =[];

function preload()
{
 
}

function setup() 
{

  createCanvas(1500,650);

  engine = Engine.create();
  world = engine.world;

  for(i = 0; i <= width; i=i+20)
 {
   drops.push(new Rain(i,random(0,400),10));
 }

 umber =new Boy(500,500,100,100);

  Engine.run(engine);
}

function draw() {

  background("black");
  
 
  camera.position.x =width/2;
  camera.position.y =umber.y;

  if(keyDown(UP_ARROW))
  {
  umber.y=umber.y-20;
  }

  if(Rain.position.y > height)
  {
    Matter.Body.setPosition(this.Rain, {x:random(0,400), y:random(0,400)})
  }

  umber.display();

  for(var i = 0; i < drops.length; i++)
  {
 drops[i].display();
  }

  Engine.update(engine);

drawSprites();
}
