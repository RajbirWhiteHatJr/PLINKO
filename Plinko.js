class Plinko {
  
    constructor(x, y) {
      var options = {
        'isStatic':true,  
        'restitution':0.3,
          'friction':0.5,
          'density':1.0,

      }
      this.body = Matter.Bodies.circle(x, y, 10,options);
      this.radius = 10;
      World.add(world, this.body);
      
    } 
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("red")
      ellipseMode(CENTER);
      ellipse( 0, 0, this.radius,this.radius);
      pop();
     
      


      
    }
  };
  
 
 


  // for (var j = 40; j<=width; j=j+50){
      //  Plinkos.push(new Plinko(j,75));
      // }
      // for (var j = 15; j<=width-10; j=j+50){
      //   Plinkos.push(new Plinko(j,175));
      //  }
       