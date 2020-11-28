class Bob{
    constructor(a,b,radius){
        
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2 
        }
        
        
        this.body = Bodies.circle(a,b,radius,options);
        this.radius = radius;
        this.a = a;
        this.b = b;

        World.add(world,this.body);

        
    }

    display(){
        var pos = this.body.position;

        push()
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        fill("255,0,0");      
        pop()
    }
}