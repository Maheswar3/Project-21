var Astronaut;
var bg,bgImg;
var sleep;
var brush,brushing;
var gyming ,gym;
var Eat,eating;
var Drink,drinking;
var Move,moving;

function setup() {
createCanvas(400, 400)
bgImg=loadImage ("images/iss.png");

sleep=loadAnimation ("images/sleep.png");

brush=loadAnimation("images/brush.png");

Gym =loadAnimation ("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");

eat=loadAnimation ("images/eat1.png","images/eat2.png");

Drink=loadAnimation ("images/drink1.png","images/drink2.png");

Move = loadAnimation ("images/move.png","images/move1.png");




}

function draw() {
  background(220);
  
  bg= createSprite (300,300);
  bg.addImage ("bg",bgImg);
  bg.scale=0.3
  

  Astronaut=createSprite (200,230);
  Astronaut.scale=0.1;
  Astronaut.addAnimation ("sleeping",sleep);

  drawSprite ();

  brushing ();
  gym ();
  eat();
  drink ();
  move ();
}


function brushing (){
if (keyDown("UP_ARROW")){
 Astronaut.addAnimation ("brushing",brush);
 Astronaut.changeAnimation ("brushing");
 Astronaut.y=350;
 Astronaut.velocityX=0;
 Astronaut.velocityY=0;
}

}
function gym (){
  if (keyDown("DOWN_ARROW")){
   Astronaut.addAnimation ("gyming",gym);
   Astronaut.changeAnimation ("gyming");
   Astronaut.y=350;
   Astronaut.velocityX=0;
   Astronaut.velocityY=0;
  }
  
  }
  function gym (){
    if (keyDown("LEFT_ARROW")){
     Astronaut.addAnimation ("eating",eat);
     Astronaut.changeAnimation ("eating");
     Astronaut.y=350;
     Astronaut.velocityX=0;
     Astronaut.velocityY=0;
    }
    
    }
    function move (){
      if (keyDown("M")){
       Astronaut.addAnimation ("moving",move);
       Astronaut.changeAnimation ("moving");
       Astronaut.y=350;
       Astronaut.velocityX=1;
       Astronaut.velocityY=0;
      }
      
      }
      function drink (){
        if (keyDown("Right_ARROW")){
         Astronaut.addAnimation ("drinking",drink);
         Astronaut.changeAnimation ("drinking");
         Astronaut.y=350;
         Astronaut.velocityX=0;
         Astronaut.velocityY=0;
        }
        }