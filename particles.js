class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.lifespan = 255.0;
    this.mass = 1;
    this.r = 4; // 반지름 (circle diameter 8 -> r=4)
  }

  run() {
    let gravity = createVector(0, 0.05);
    this.applyForce(gravity);
    this.update();
    this.show();
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    this.acceleration.mult(0);

    this.edge();
  }

  // Method to display
  show() {
    stroke(0, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    circle(this.position.x, this.position.y, 8);
  }

  // 캔버스 경계에서 튕기게 하는 기본 동작
  edge() {
    const r = this.r;
    // 오른쪽
    if (this.position.x > width - r) {
      this.position.x = width - r;
      this.velocity.x *= -0.9;
    }
    // 왼쪽
    if (this.position.x < r) {
      this.position.x = r;
      this.velocity.x *= -0.9;
    }
    // 아래
    if (this.position.y > height - r) {
      this.position.y = height - r;
      this.velocity.y *= -0.9;
    }
    // 위
    if (this.position.y < r) {
      this.position.y = r;
      this.velocity.y *= -0.9;
    }
  }

  isDead() {
    return this.lifespan < 0.0;
  }
}
