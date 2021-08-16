
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper1= new Paper(200,650)
	 dustbinleft=new Dustbin(1090,650,20,100)
  dustbinright=new Dustbin(1310,650,20,100)
  dustbinbottom=new Dustbin(1200,680,200,20)
  //ground=createSprite(width/2,height,width,20)
  ground = Bodies.rectangle(width/2, 700, width, 10 , {isStatic:true} );
  World.add(world, ground);

 // Engine.update(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  paper1.display()
    //fill("red")
  dustbinleft.display();
  dustbinright.display();
  dustbinbottom.display();
  console.log(ground);
 // fill("black")
rect(ground.position.x,ground.position.y,width,10)


 
 
}

function keyPressed()
{

  if (keyCode===UP_ARROW)
  {
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.07,y:-0.07})

  }

}



