

var canvas;
var music;
var box1,box2,box3,box4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 ball=createSprite(random(10,750),300,20,20);
ball.shapeColour="white";
ball.velocityX=3;
ball.velocityY=3;

edges=createEdgeSprites();



    //create box sprite and give velocity
box1=createSprite(0,580,360,30);
box1.shapeColor="red";


box2=createSprite(295,580,200,30);
box2.shapeColor="green";

box3=createSprite(515,580,200,30);
box3.shapeColor="orange";

box4=createSprite(740,580,220,30);
box4.shapeColor="blue";
}

function draw() {
    background(rgb(169,169,169));
   
  if (ball.isTouching(box1)){
  ball.shapeColor="red";
  music.play();
  }
  if (ball.isTouching(box2)){
    ball.shapeColor="green";
    ball.velocityX=0;
    ball.velocityY=0;    
    }
    if (ball.isTouching(box3)){
        ball.shapeColor="orange";    
        } 
        if (ball.isTouching(box4)){
            ball.shapeColor="blue";    
            } 
            
            

 ball.bounceOff(box1);
 ball.collide(box2);
 ball.bounceOff(box3);
 ball.bounceOff(box4);
 ball.bounceOff(edges);


 drawSprites();


    //add condition to check if box touching surface and make it box
}
