function preload() {
    plaatje = loadImage("../images/sprites/kever.png");
}

function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  textSize(30);
  canvas.parent('processing');
}
 
function draw() {
  image(plaatje,0,45,50,50);
  text("breedte= "+plaatje.width,150,40);
}

