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
        fill('pink');
        noStroke();
    }

};

var eiland = {
    x: 450,
    y: 450,
    diameter: 150,


    teken() {
        ellipse(this.x,this.y,this.diameter);
        fill('white');
       
    }


};


function setup() {
    canvas = createCanvas(450,450);
}

function draw() {
    background('grey');
    stipje.teken();
    stipje.beweeg();
    eiland.teken();
    eiland.beweeg();
    eiland.wordtBezocht(stipje);
}