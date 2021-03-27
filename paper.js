class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false	,
            restitution:0.3,
            friction:0,
            density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r;
        this.image=loadImage("papr.png")
		this.body=Bodies.rectangle(x, y, r , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("red")
            imageMode(CENTER)
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}