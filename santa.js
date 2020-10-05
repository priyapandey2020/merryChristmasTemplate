class santa
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.5,		
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}