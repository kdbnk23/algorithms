var fix
var power 


function setup() {
  createCanvas(800,400);
  fix=createSprite(400, 200, 40, 40);
  power=createSprite(200,200,20,20)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  power.x=mouseX
  power.y=mouseY
  if (power.x-fix.x<power.width/2+fix.width/2
    &&fix.x-power.x<power.width/2+fix.width/2){
      power.shapeColor="blue"
    }
    if (power.y-fix.y<power.height/2+fix.height/2
      &&fix.y-power.y<power.height/2+fix.height/2){
   power.shapeColor="red"
      }
}