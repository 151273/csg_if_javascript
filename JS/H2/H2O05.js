var aantalRijenRaster = 6;
var aantalKolommenRaster = 9;
var celGrootte;

var spriteJos;
var brug;
var xJos;
var yJos;

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  spriteJos = loadImage("images/sprites/Jos100px/Jos_0.png");
}

function setup() {
  canvas = createCanvas(901,601);
  canvas.parent('processing');
  celGrootte = width / aantalKolommenRaster;
}

function draw() {
  background(brug);
  tekenRaster();
}

function tekenRaster() {
  push();
  for(var rij = 0; rij < aantalRijenRaster; rij++) {
    rect(kolom*celGrootte,rij*celGrootte,celGrootte,celGrootte);  
  }
  for(var kolom = 0; kolom < aantalKolommenRaster; kolom++) {
    rect(kolom*celgrootte,rij*celGrootte,celGrootte,celGrootte);
  }
  noFill();
  stroke('grey');
  pop();
}