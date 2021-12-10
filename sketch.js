//Name: Nicola Paparella
//Email:np1216@bard.edu
//Date: 9 December 2021
//Assignment Description: I had to create a small javascript program using the support of libraries
//Collaboration Statement: I collaborated with the CMSC tutors and looked up help online (the construction of objects in Javascript)



let star;
let invader;
let bullet;


function setup() {
  createCanvas(1000, 500);
  collideDebug(true);
  invader = new SpaceInvaders(500, 40, 3);
  bullet = new Bullet(mouseX, 450);
  
}

function draw() {
  background(255);
  star = new Starship(mouseX, 450, 80, 10);
  

  star.display();
  invader.display();
  invader.motion();
  bullet.display();
  bullet.motion();

  fill(0);
  line(950, 0, 0, 0);
  line(0, 950, 0, 0);
  line(0, 500, 950, 500);
}

function Starship(positionX, positionY, width, height) {
  this.w = width;
  this.h = height;
  this.posX = positionX;
  this.posY = positionY;

  this.display = function() {
    var hit1 = false;
    
    rectMode(CENTER);

    fill(0);
    line(950, 0, 950, 500);
    hit1 = collideLineRect(
      950,
      500,
      950,
      0,
      this.w,
      this.h,
      this.posX,
      this.posY
    );
    if (hit1 == true) {
      this.posX = 950 - 40;
    }
    fill(0);
    if (this.posX <= 40) {
      this.posX = 40;
    }

    fill(255, 0, 0);
    rect(this.posX, this.posY + 30, this.w, this.h);
    fill(0);
    rect(this.posX, this.posY - 10 + 30, 10, 10);
  };
}

function SpaceInvaders(positionX, positionY, horiVel) {
  this.w = 120;
  this.h = 20;
  this.posX = positionX;
  this.posY = positionY;
  this.hv = horiVel;
  this.colorR = 153;
  this.colorG = 195;
  this.colorB = 175;

  this.display = function() {
    
    fill(this.colorR, this.colorG, this.colorB);
    rect(this.posX, this.posY, this.w, this.h);
  };

  this.motion = function() {
    var hit1 = false;
    this.posX += this.hv;
    if (this.posX >= 1000 - this.w) {
      this.hv = -this.hv;
    }
    if (this.posX <= 0 + this.w / 2) {
      this.hv = -this.hv;
    }
    
    hit1 = collideRectRect(this.posX-40, this.posY, this.w, this.h, bullet.posX, bullet.posY, bullet.w, bullet.h);
    if (hit1 == true){
      if (this.colorR == 153 && this.colorG == 195 && this.colorB == 195){
        this.colorR = 255;
        this.colorG = 0;
        this.colorB = 0;
        
      }
      else{
        this.colorR = 153; 
        this.colorG = 195; 
        this.colorB = 195;
      }
         
    } 
  };
}

function Bullet(positionX, positionY) {
  this.w = 5;
  this.h = 10;
  this.posX = positionX;
  this.posY = positionY;

  this.display = function() {
    fill(255, 255, 0);
    rect(this.posX, this.posY, this.w, this.h);
  };

  this.motion = function() {
    
    this.posY -= 7;
    if((this.posY <= 0) || (this.posY == 450)){
      this.posY = 450;
      this.posX = star.posX;
    }
  };
}
