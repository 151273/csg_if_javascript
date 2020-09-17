var stipje = {
 x: 225,
 y: 225,
diameter: 150,

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
        fill('pink');
        ellipse(this.x,this.y,this.diameter);
        noStroke();
    }

};

var eiland = {
    x: 450,
    y: 450,
    diameter: 250,
    kleur: 'blue',


    teken() {
        fill(this.kleur);
        ellipse(this.x,this.y,this.diameter);
         noStroke();
    },

    wordtBezocht(bezoeker) { 
        if(dist(this.x,this.y,bezoeker.x,bezoeker.y) <= (this.diameter + bezoeker.diameter) /2) {
            this.kleur = 'red';
        }
        else {
            this.kleur = 'blue';
        }
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
    eiland.wordtBezocht(stipje);
}