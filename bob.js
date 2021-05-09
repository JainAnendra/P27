class Bob  {
    constructor(x,y,r)
      {
          var options = { 
              density: 1, 
              //frictionAir: 1
              restitution: 1.2
          };
          
          this.r= r
          this.body=Bodies.circle (x, y, r, options )
          World.add(world, this.body);
  
      }
      
      display()
      { ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)

      }
    }