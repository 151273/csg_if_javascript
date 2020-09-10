var stipje = {
 x: 225,
 y: 225,
diameter: 100,

beweeg() {
    
    if(keyIsDown(LEFT_ARROW)) {
        this.x --;
    }

    if(keyIsDown(RIGHT_ARROW)) {
        this.x ++;
    }
   
    if(keyIsDown(UP_ARROW)) {
        this.y --;
    }

    if(keyIsDown(DOWN_ARROW)) {
        this.y ++;

    }
},
    teken() {
        ellipse(this.x,this.y,this.diameter);
        fill('red');
    }

};

function setup() {
    canvas = createCanvas(450,450);
}

function draw() {
    background('grey');
    stipje.teken();
    stipje.beweeg();
}