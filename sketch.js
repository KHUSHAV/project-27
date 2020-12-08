
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine , world;
var roof1; 
var rope1 , rope2 , rope3 , rope4 , rope5;
var bob1 , bob2 , bob3 , bob4 , bob5;


function preload()
{
	
}

function setup() {
	createCanvas(2000, 1000);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(1000,100,900,100);
	
	bob1 = new Bob(880,600,30);
	bob2 = new Bob(940,600,30);
	bob3 = new Bob(1000,600,30);
	bob4 = new Bob(1060,600,30);
	bob5 = new Bob(1120,600,30);

	rope1 = new Rope(bob1.body,{x:880,y:100});
	rope2 = new Rope(bob2.body,{x:940,y:100});
    rope3 = new Rope(bob3.body,{x:1000,y:100});
	rope4 = new Rope(bob4.body,{x:1060,y:100});
	rope5 = new Rope(bob5.body,{x:1120,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  
  
 roof1.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();



}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:-0})
	}
}