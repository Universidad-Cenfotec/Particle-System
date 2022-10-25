//Tomás de Camino Beck, Ph.D
//Sistemas Inteligentes
//Universidad Cenfotec

let n = 50 ;
var Particles = [];
const gravity = 0; //cambiar este parámetro a valor >0 para incorporar gravedad

class Particle {
  constructor(x, y, size, sX, sY, elasticity) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.sX = sX;
    this.sY = sY;
    this.elasticity = elasticity;
    this.g = gravity;
  }

  display() {
    //line(this.x, this.y,this.x+this.sX*5, this.y+this.sY*5)
    circle(this.x, this.y, this.size);
  }

  move() {
    this.sY += this.g;
    this.x += this.sX;
    this.y += this.sY;
  }

  bounce(w, h) {
    if (this.x >= w - this.size / 2 || this.x < this.size / 2) {
      this.sX *= -this.elasticity;
    }
    if (this.y >= h - this.size / 2 || this.y < this.size / 2){
      this.sY *= -this.elasticity;
    }

  }
  
  interact(x,y){
    if(dist(this.x,this.y,x,y)<this.size){
      this.sX *= -this.elasticity;
      this.sY *= -this.elasticity;
    }
  }
  
}

function setup() {
  createCanvas(500, 200);
  
  for (let i = 0; i < n; i++) {
    Particles.push(new Particle(
      random(0,width), 
      random(0,height), 
      10, 
      random(-2.5,2.5), 
      random(-2,2), 
      1
    ));
  }
  
  background(255);
}

function draw() {
  background(255);
  //noStroke();
  stroke(0,0,0);
  strokeWeight(3);
  fill(74,134,232, 150);

  //fill(0);
  //text(str(particle.y), 100, 10);
  for (let i = 0; i < Particles.length; i++) {
    Particles[i].display();
    Particles[i].move();
    Particles[i].bounce(width, height);
    for (let j = 0; j < Particles.length; j++){
      if(i!=j){
        Particles[i].interact(Particles[j].x,Particles[j].y);
        
      }
      
    }
  }
}
