/*
function setup(){
  window.open(500,500);

}

function draw(){
  fill(0);
  ellipse(40,40,40,40);

}
*/



let star;


function setup(){
  window.open(500,500);
  star = new Starship(50, 50);
  
  
}


function draw(){
  star.display();
  
  
}

function Starship(width, height){
  this.w = width;
  this.h = height;
  
  
  this.display = function(){
    fill(0);
    ellipse(this.w, this.h);
    
    
    
  };
  
  
