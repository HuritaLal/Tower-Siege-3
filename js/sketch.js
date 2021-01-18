const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2,ground3,ground4;
var holder;
var box1;
var ball;
var slingshot;
var polygonImage,backgroundImage;
var bg = "images/light.jpg";
var score=0;
function preload()
{
  polygonImage=loadImage("images/yellow.png");
  getBackgroundImage();
  
}

function setup() {
  createCanvas(1200,800);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground1 = new Ground(500,520,250,20);
  ground2 = new Ground(900,250,250,20);
  ground3 = new Ground(600,750,1200,20);

  block1 = new Block(410,500,30,40);
  block2 = new Block(440,500,30,40);
  block3 = new Block(470,500,30,40);
  block4 = new Block(500,500,30,40);
  block5 = new Block(530,500,30,40);
  block6 = new Block(560,500,30,40);
  block7 = new Block(590,500,30,40);
  block8 = new Block(440,460,30,40);
  block9 = new Block(470,460,30,40);
  block10 = new Block(500,460,30,40);
  block11 = new Block(530,460,30,40);
  block12 = new Block(560,460,30,40);
  block13 = new Block(470,420,30,40);
  block14 = new Block(500,420,30,40);
  block15 = new Block(530,420,30,40);
  block16 = new Block(500,380,30,40);
  block17 = new Block(840,225,30,40);
  block18 = new Block(870,225,30,40);
  block19 = new Block(900,225,30,40);
  block20 = new Block(930,225,30,40);
  block21 = new Block(960,225,30,40);
  block22 = new Block(870,185,30,40);
  block23 = new Block(900,185,30,40);
  block24 = new Block(930,185,30,40);

  block25 = new Block(900,145,30,40);

  ball = Bodies.circle(80,530,20);
  World.add(world,ball);

  slingshot = new SlingShot(ball,{x:80,y:530});

  Engine.run(engine);
}

function draw() {
  //background(0,0,0); 
  //text("Score : "+score,750,40);

  if(backgroundImage)
  background(backgroundImage);
  
  textSize(15);
  fill(0,0,0)
  text("Score : "+score,750,40);

  ground1.display();
  ground2.display();
  ground3.display();
  
  fill(rgb(55, 211, 209));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill(rgb(59, 129, 214));
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(rgb(39, 98, 170));
  block13.display();
  block14.display();
  block15.display();

  fill(rgb(9, 53, 107));
  block16.display();

  fill(rgb(11, 22, 1240));
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill(rgb(47, 60, 175));
  block22.display();
  block23.display();
  block24.display();

  fill(rgb(12, 78, 209));
  block25.display();

  imageMode(CENTER)
  image(polygonImage,ball.position.x,ball.position.y,40,40);

  slingshot.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
 
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(this.ball);
      
  }
}
async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  //console.log(hour);

  if (hour >= 06 && hour <= 18) {
    bg = "images/light.jpg";
  } else {
    bg = "images/dark.jpg";
  }

  backgroundImage = loadImage(bg);
  console.log(backgroundImage);
}