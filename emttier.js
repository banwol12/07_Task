
class Emitter {
  constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
  }

  addParticle() {
    let r = random(1);
    if (r < 0.5) {
      this.particles.push(new Particle(this.origin.x, this.origin.y));
    } else {
      this.particles.push(new Confetti(this.origin.x, this.origin.y));
    }
  }

    edge() {
    const r = this.r;
        if (this.position.y > height - r) {
            this.velocity.y *= -0.9;
            this.position.y = height - r;
        }
        if (this.position.y < r) {
            this.velocity.y *= -0.9;
            this.position.y = r;
        }   if (this.position.x > width - r) {
            this.velocity.x *= -0.9;
            this.position.x = width - r;
        }   if (this.position.x < r) {
            this.velocity.x *= -0.9;
            this.position.x = r;
        }
    }

  applyForce(force) {
    for (let p of this.particles) {
      p.applyForce(force);
    }
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}
