class Rope{

    constructor(bodyA , pointB ){

        
    var options  = {
        bodyA : bodyA,
        pointB : pointB,
        stiffness: 1,
        length : 700
    }

    this.pointB = pointB
    this.rope = Constraint.create(options);

    World.add(world,this.rope);

    }
   

    display() {
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
        stroke("blue")
        strokeWeight  (4)
        line (pointA.x, pointA.y, pointB.x, pointB.y)
      }
    }
}