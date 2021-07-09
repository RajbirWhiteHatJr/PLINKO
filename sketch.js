const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 
var floor,div1,div2,div3,div4,div5,div6,div7,div8,div9,div10,div11;
var plinkos = []
var particles = []
var divisions = []
var divisionHeight = 300;


function setup() {
   createCanvas(480,700);
    //createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;
   //creating ground
   floor = new Ground(400,700,800,10)
   //creating divisions
   for(var k=0 ; k<=width ; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
   }
  //creating plinkos
   for(var l=25 ; l<=width ; l=l+50){
    plinkos.push(new Plinko(l,25))
   }

   for(var l=35 ; l<=width-10 ; l=l+50){
    plinkos.push(new Plinko(l,125))
   }

   for(var l=25 ; l<=width-10 ; l=l+50){
    plinkos.push(new Plinko(l,225))
   }

   for(var l=35 ; l<=width-10 ; l=l+50){
    plinkos.push(new Plinko(l,325))
   }
    
   //creating particles
  
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  floor.display(); 

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10))
  }
 
  //displaying particles
  for (var j = 0 ; j<particles.length; j++){
     particles[j].display();
  }
  
  //displaying divisions
  for (var k = 0 ; k<divisions.length; k++){
    divisions[k].display();
  //displaying plinkos
 }
 for (var l = 0 ; l<plinkos.length; l++){
  plinkos[l].display();
}
 
  drawSprites();
  
}

