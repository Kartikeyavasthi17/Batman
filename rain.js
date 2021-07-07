class Rain
{
    constructor(x,y,radius)
    {

        var options={
            restitution:0.2, 
            friction:0.1,
        }

        this.body =Bodies.circle(x,y,radius,options);
        this.radius =radius;
        World.add(world,this.body);

    }

    display()
    {
        var pos =this.body.position;
    
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(pos.x,pos.y,this.radius);
        
    }
}