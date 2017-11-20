let cards = [];
const count = 2000;

function setup() {
  createCanvas(800, 800);
  for(i = 0; i < count; i++){
    let x = random(-width, width);
    let y = random(-height, height);
    let z = random(width);
  cards[i] = new Card(x,y,z);

  }
}

function draw() {
  let speed = map(mouseX, 0, width, 0, 20);
  background(0);
  translate(width - mouseX, height - mouseY);
  for(i = 0; i < cards.length; i++){
  cards[i].update(speed);
  cards[i].show();
    }
}



class Card {
  constructor(x,y,z,v){
    this.x = x;
    this.y = y;
    this.z = z;
  }

  show(){
  fill(255);
  noStroke();
  ellipse (this.sx, this.sy, this.r);

  this.pz = this.z
  this.px = map (this.x/this.pz, 0, 1, 0, width);
  this.py = map (this.y/this.pz, 0, 1, 0, height);
  strokeWeight(1);
  stroke(255, 100);
  line(this.px, this.py, this.sx, this.sy);

  }

  update(speed){

    if (this.z < 1){
      this.z = width;
    }
    else{
  this.z = this.z - speed
    }

  this.sx = map (this.x/this.z, 0, 1, 0, width);
  this.sy = map (this.y/this.z, 0, 1, 0, height);

  this.r = map (this.z/width, 0 ,1 , 10, 0);

  }
}
