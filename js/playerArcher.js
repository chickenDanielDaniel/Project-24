class PlayerArcher {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
  
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/playerArcher.png");
  
      World.add(world, this.body);

      Matter.Body.setAngle(this.body, -PI/2);
    }
  
   
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }

    shoot(archerAngle) {
        var velocity = p5.Vector.fromAngle(archerAngle);
        velocity.mult(20);
        MatterBody.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, { x:velocity.x, y: velocity.y});
    }
  }
  