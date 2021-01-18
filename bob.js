class Bob {
 constructor(x,y,radius){
   var options={
    isStatic:false,
    restitution:0.2,
    friction:1.0,
    density:1.5
   }
   this.x = x;
   this.y = y;
   this.radius = r;
  this.body = Bodies.circle(this.x,this.y,this.r,options);
  World.add(world,this.body);


 }

   display(){
    var pos =this.body.position;
    var angle = this.body.angle;
     push()
    ellipseMode(RADIUS)
    ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
    translate(pos.x, pos.y);
    rotate(angle);
     pop();
   }
}  