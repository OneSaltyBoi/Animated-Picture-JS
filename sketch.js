var numRain = 500;
var myRain = [];
var tempRain; 
var numLight = 1;
var myLight = [];
var tempLight;


function setup() {
    createCanvas(400, 400);
    
    for (i=0; i<numRain; i++){
        tempRain = new Rain();
        myRain.push(tempRain);
    }
    
    for (i=0; i<numLight; i++){
        tempLight = new Lightning();
        myLight.push(tempLight);
    }
   
}

function draw() {
    background(0,0,150);
    
    stroke(0,0,140);
    fill(0,0,140);
    
    rect(50,25, 75, 375);
    rect(250, 50, 90, 350);
    
    stroke(0,0,130);
    fill(0,0,130);
    rect(150, 100, 60, 300);
    
    stroke(0);
    fill(100,100,0);
    for (i=0; i <= 6; i++) {
        offset = 50 * i 
        rect(60, 1+offset, 5, 10)
        rect(100, 50+offset, 5, 10)
        rect(175, 125+offset, 3, 6)
        rect(275, 70+offset, 5, 10)
        rect(320, 90+offset, 5, 10)
    }
    rect(80, 70, 5, 10)
    rect(85, 200, 5, 10)
    rect(80, 300, 5, 10)
    rect(190, 240, 3, 6)
    rect(200, 100, 3, 6)
    rect(160, 300, 3, 6)
    rect(300, 80, 5, 10)
    rect(285, 150, 5, 10)
    rect(300, 300, 5, 10)
    

    
    for (i=0; i<myRain.length; i++) {
            myRain[i].move();
            myRain[i].show();
    }
    for (i=0; i<myLight.length; i++) {
            myLight[i].move();
            myLight[i].show();
    }
 
    
    fill(160, 230);
    stroke(160, 230);
    
    for (i=0; i <= 20; i++) {
            offset = 20 * i
            ellipse(1+offset, 1, 35, 30)
            ellipse(1+offset, 10, 40, 35)
    }
}
class Lightning {
    constructor (){
        this.x = (5, width-5);
        this.y = random(20);
        this.speed = 25;
        
    }
    move() {
        if (this.y > 2000) {
            this.y = random(5)
            this.x = random(10,width-10);
        }
        else {
            this.y = this.y + this.speed;
        }
    }
    
    show() {
        stroke (255,255,255);
        fill (255,255,0);
        rect(this.x, this.y, 4, 150);
        rect(this.x+4, this .y-100, 3, 200)
        
    }
    getX() {
        return this.x;
    }
    
    getY() {
        return this.y;
    }
    resetPos() {
        this.y = 800;
        this.x = random(13,width-25);
    }
    
    
}


class Rain {
    constructor() {
        this.x = random(-50,width-5);
        this.y = random(20);
        this.speed = random(7,8,9,10,11);
    }
    
    move() {
        if (this.y > height-30) {
            this.y = random(0,1,2,3,4,5);
            this.x = random(-75,width-1);
        }
        else {
            this.y = this.y + this.speed;
            this.x = this.x + this.speed/4.5;
        }
        
    }
    
    show() {
        stroke(30,30,210);
        fill(0,0,210);
        rect(this.x, this.y, 1, 20);
    }
    
    getX() {
        return this.x;
    }
    
    getY() {
        return this.y;
    }
    
    resetPos() {
        this.y = 0;
        this.x = random(13,width-25);
    }
    
}