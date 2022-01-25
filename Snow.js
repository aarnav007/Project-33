class Snow {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.r = 10;
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("snow4.webp");
      this.image1 = loadImage("snow5.webp");
      World.add(world, this.body);
  }
  display() {

      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      noStroke();
      fill("white");
      ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
      image(this.image1,50,50,50,50)
      pop();
  }

};
    