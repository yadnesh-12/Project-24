
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane1= new Plane(400,690,800,20);
	stone1= new Stone(400,350,70,70);
	hammer1= new Hammer(0,0,100,50);
	rub1= new Rubber(700,50,50);
	sand1= new Sand(500,685,5);
	sand2 = new Sand(300,685,5);
	sand3 = new Sand(100,685,5);
	sand4 = new Sand(750,685,5);
	sand5 = new Sand(550,685,5);
	sand6 = new Sand(350,685,5);
	sand7 = new Sand(150,685,5);
	sand8 = new Sand(50,685,5);
	sand9 = new Sand(780,685,5);
	sand10 = new Sand(580,685,5);
	iron1 = new Iron(200,50,80,40)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  plane1.display();
  stone1.display();
  hammer1.display();
  rub1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  iron1.display();

  drawSprites();
 
}



