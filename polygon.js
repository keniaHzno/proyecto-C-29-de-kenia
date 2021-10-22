class Polygon{
constructor(x,y,w,h){
    
    this.body = Bodies.rectangle(x, w, y, h);
    this.width = w;
    this.height = h;
    this.image = loadImage("polygon.png");
    World.add(world,this.body);
}
display(){
    var position = this.body.position;
   // position.x = mouseX;
    //position.y = mouseY;

    push();
    translate(this.body.position.x,this.body.position.y);
    //rect(0, 0, this.width, this.height);

    imageMode(CENTER);
    image(this.image,position.x,position.y,40,40);
    pop();
}
}