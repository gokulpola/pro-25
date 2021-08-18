
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

 var dustbinObj,paperObj,groundObj;
 var world;

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER)
    
	engine = Engine.create();
	world = engine.world;

	 paperObj=new Paper(200,450,40);
	 groundObj=new Ground(width/2,670,width,20);
	 dustbinObj=new Dustbin(1200,650);

	 var render = Render.create({
    element: document.body,
	engine: engine, 
	options: {
	width: 1600,
	height: 700,
	 wireframes: false
				 } 
				}); 
				 
	Engine.run(engine);
	Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  paperObj.display();
  groundObj.display();
  dustbinObj.display();
  
  
}
function keyPressed(){
	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85});
	}
}


