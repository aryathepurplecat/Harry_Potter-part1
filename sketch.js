var backg
var harry
var vold, vold_move

function preload() {
  bg_image = loadImage("cloudb2.jpg");
  harryim = loadImage("main1.png");
  voldim = loadImage("voldy_s.png")
  voldmove = loadImage("voldy_move.png");
  voldat = loadImage("voldy_at.jpg");
}

function setup() {
  createCanvas(displayWidth - 20,displayHeight - 20);
  harry = createSprite(200,500,50,50);
  harry.addImage(harryim);
  harry.scale = 0.3
  vold = createSprite(500,400,50,50);
  vold.addImage(voldim);


}

function draw() {
  background(bg_image);  
  drawSprites();
}