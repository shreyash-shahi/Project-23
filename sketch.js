var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, Box1, Box2, Box3, boxSprite1, boxSprite2, boxSprite3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(0)

	boxSprite1 = createSprite(width/2, height-30, 200, 20)
	boxSprite1.shapeColor = "red";

    boxSprite2 = createSprite(310, height-75, 20, 100)
	boxSprite2.shapeColor = "red";

    boxSprite3 = createSprite(490, height-75, 20, 100)
	boxSprite3.shapeColor = "red";


	engine = Engine.create();
	world = engine.world;

	Box1 = new BOX();
	Box1.xPosition = width/2;
	Box1.yPosition = height-35;
	Box1.width = 200;
	Box1.height = 20;
	Box1.display();
	World.add(world, Box1);

	Box2 = new BOX();
	Box2.xPosition = 310;
    Box2.yPosition = height-75;
	Box2.width = 20;
	Box2.height = 100;
	Box2.display()
	World.add(world, Box2);

	Box3 = new BOX();
	Box3.xPosition = 490;
	Box3.yPosition = height-75;
	Box3.width = 20;
	Box3.height = 100;
	Box3.display();
	World.add(world, Box3);


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);   
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
    keyPressed(DOWN_ARROW);
  
 
  
  
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
     }
 
}



