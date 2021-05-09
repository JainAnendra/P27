class Rope {
    constructor(bodyA,bodyB, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        bodyB:bodyB,
      
      };
  
      this.pointB = pointB;
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }
   
    
  
   
    
  
    display() {
      if (this.rope.bodyA) {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        var pointC = this.rope.bodyB.position;
       
  
        stroke(48, 22, 8);
        strokeWeight(2);
  
        line(pointA.x, pointA.y - 40, pointC.x +pointB.x , pointC.y+ pointB.y +10);
  
       
      }
    }
  }
  