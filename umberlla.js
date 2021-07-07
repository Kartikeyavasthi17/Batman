class Boy
{

    constructor(x,y,width,height)
    {

        var options={
            isStatic:true,
        }

        this.body =Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image =loadImage("walking_1.png");
        World.add(world, this.body);
    
    }

    display()
    {
        var kand =this.body.position
        imageMode(CENTER);
        image(this.image, kand.x,kand.y, this.width, this.height);
    }
}