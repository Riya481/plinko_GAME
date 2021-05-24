const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles=[];
var plinko1=[];
var plinko2=[];
var plinko3=[];
var plinko4=[];
var divisions=[];

var divisionHeight = 300;

var upGround,leftGround,rightGround;
var bottomdivision;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  bottomdivision = new Ground(240,795,width,10);

  for(var d=0; d<width; d=d+80){
    divisions.push(new Divisions(d, height-divisionHeight/2,10,divisionHeight));
  }

  for(var a=40; a<=width; a=a+50){
    plinko1.push(new Plinko(a,75));
  }

  for(var b=15; a<=width-10; b=b+50){
    plinko2.push(new Plinko(b,175));
  }

  for(var c=40; c<=width; c=c+50){
    plinko3.push(new Plinko(a,275))
  }

  for(var d=15; d<=width; d=d+50){
    plinko4.push(new Plinko(d,375))
  }

  upGround = new Ground(width/2,2.5,width,5);
  leftGround = new Ground(1,height/2,5,height);
  rightGround = new Ground(479.5,width/2,5,height);
}

function draw() {
  background(0);  

  Engine.update(engine)

  bottomdivision.display();

  for(var z=0; z<=divisios.length-1; z=z+1){
    divisions[z].display();
  }

  for(var e=0; e<plinko1.length-1; e=e+1){
    plinko1[e].display();
  }

  for(var e=0; e<=plinko2.length-1; e=e+1){
    plinko2[e].display();
  }
  
  for(var e=0; e<=plinko3.length-1; e=e+1){
    plinko3[e].display();
  }

  for(var e=0; e<=plinko4.length-1; e=e+1){
    plinko4[e].display();
  }
  
 if(frameCount%60===0){
   particles.push(new Particle(random(random(width/2-10,width/2+10),10,10)));
 }

 for(var f=0; f<=particles.length-1; f=f+1){
  particles[f].display();
}
  
  drawSprites();
}