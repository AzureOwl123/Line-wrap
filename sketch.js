


uneven-highfalutin-allium

Show
sketch.js
success: Opened in another tab or window
//Name: Nicola Paparella
//Email: np1216@bard.edu
//Date: 9 December 2021
//Assignment Description: I had to create a small javascript program using the support of libraries
//Collaboration Statement: I collaborated with the CMSC tutors and looked up help online (the construction of objects in Javascript)
​
​
​
let star;
let invader;
let invBullets;
let bullet;
let event;
​
​
function setup() {
  createCanvas(1000, 500);
  collideDebug(true);
  invader = new SpaceInvaders(500, 40, 3);
  bullet = new Bullet(mouseX, 450);
  
}
​
function draw() {
  background(255);
  star = new Starship(mouseX, 450, 80, 10);
  
​
  star.display();
  invader.display();
  invader.motion();
  bullet.display();
  bullet.motion();
​
  fill(0);
  line(950, 0, 0, 0);
  line(0, 950, 0, 0);
  line(0, 500, 950, 500);
}
​
function Starship(positionX, positionY, width, height) {
  this.w = width;
  this.h = height;
  this.posX = positionX;
  this.posY = positionY;
​
  this.display = function() {
    var hit1 = false;
