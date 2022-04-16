var allewayImage, bg;

function preload(){
  alleywayImage = loadImage("./assets/alleway(merged).jpg")
  catImage = loadImage("./assets/cat-removebg-preview.png")
  dogImage = loadImage("./assets/dog-removebg-preview.png")
  fenceImage = loadImage("./assets/fence-removebg-preview.png")
}

function setup() {
  createCanvas(1900,950);

  bg = createSprite(950,450)
  bg.scale = 1.80
 bg.addImage(alleywayImage)
 bg.velocityX = -6

 var dog = createSprite(50,800,50,50)
 dog.addImage(dogImage)

 var cat = createSprite(920,820,50,50)
 cat.addImage(catImage)
}

function draw() {
  background("green");
  if (bg.x < 0){
    bg.x = bg.width/2;
  }  
  drawSprites();
  fill("green")
  text(mouseX+","+mouseY,mouseX,mouseY)
}