class Paper {
    constructor(x, y) {
      var options = {
          restitution:0.3,
        
		
          isStatic:false
      }
      this.body = Bodies.circle(x, y, 20);
      this.r = 20;
   
      
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
	  ellipseMode(RADIUS)
      ellipse(pos.x,pos.y,this.r,this.r)
      
    }
    
    
    
}