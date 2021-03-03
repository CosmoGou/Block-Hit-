class block{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' :false 
        }
        this.Visibity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("ea592dec4d31e230fd226921ae72a0da.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        if(this.body.speed < 2){
          var angle = this.body.angle;
          var pos = this.body.position;
          }
          else{
          World.remove(world,this.body);
          this.Visiblity = this.Visiblity-5;
          tint(255,this.Visiblity);
          image(this.image,this.body.position.x, this.body.position.y, 50, 50);
          }
        pop();
        
      }
}