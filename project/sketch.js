let params = {
    amountCols : 12,
    amountRows : 7
}

let screenWidth = 500;
let screenHeight = 500;
let johns = [];
let johnWidth = 20;
let johnHeight = 20;
let johnSpeed = 1;
let sideSpacing = 30;
let straightSpacing = 30;
let xBalance = (screenWidth - (params.amountCols - 1) * sideSpacing) / 2;
let yBalance = 20;
let moveDown = 20;
//let johnImg;

let gunWidth = 100;
let gunHeight = 20;
let gun;

let pellets = [];
let pelletSpeed = 5;
let pelletWidth = 10;
let pelletHeight = 10;

let emitters = [];

var gui;


//function preload() {
  //  johnImg = loadImage('assets/john.png');
  //}

function setup() {
    populateJohns();

    gui = QuickSettings.create(550, 25, "John Invaders Controls")
        .addRange("Number of Columns", 5, 20, params.amountCols, 1,
            function(value) {
                params.amountCols = value
                johns = [];
                xBalance = (screenWidth - (params.amountCols - 1) * sideSpacing) / 2;
                populateJohns();
            })
        .addRange("Number of Rows", 5, 20, params.amountRows, 1,
            function(value) {
                params.amountRows = value
                johns = [];
                populateJohns();
            })

    gun = new Gun(screenWidth / 2, screenHeight - gunHeight / 2);
    createCanvas(screenWidth,screenHeight);
    background(255);
}

function draw() {    
    background(0);

    emitters.forEach(emitter => {
        emitter.createParticles();
        emitter.update();
        emitter.show();
    });

    gun.render();
    gun.move();
    let shift = false;

    johns.forEach(john => {
        john.move();
        john.render();
        john.pos.x >= screenWidth ? shift = true : null;
        john.pos.x <= 0 ? shift = true : null;
    });

    if(shift){
        johns.forEach(john=> {
            john.shift();
        })
    }

    for(let i = pellets.length - 1; i >= 0; i --) {
        pellets[i].move();
        pellets[i].render();
        for (let j = johns.length - 1; j >= 0; j --) {
            if(pellets[i].hits(johns[j])) {
                emitters.push(new Emitter(johns[j].pos.x, johns[j].pos.y))
                johns.splice(j, 1);
                pellets.splice(i, 1);
                break
            }
        }
    }

    checkGameStatus()

}

function checkGameStatus() {
    let gameOver = false;
    
    johns.forEach(john => {
        if(john.pos.y > 480){
            gameOver = true;
        }
    });

    if (gameOver){
        noLoop();
        textSize(120);

        fill(255, 0, 0);
        textAlign(CENTER, CENTER);
        text("Game Over", 250, 200);
    }

}

function keyPressed(){
    if (keyCode === 32) {
        pellets.push(new Pellet(gun.pos.x, screenHeight - gunHeight, gun.gunAngle))
    }
    if (keyCode === RIGHT_ARROW) {
        gun.gunAngle += 0.2;
    }   else if (keyCode === LEFT_ARROW) {
            gun.gunAngle -= 0.2;
    } 
}


function populateJohns(){
    for(let rows = 0; rows < params.amountRows; rows++){
        for(let column = 0; column < params.amountCols; column++){
            johns.push(new John(column * sideSpacing + xBalance, rows * straightSpacing + yBalance))
        } 
    }
}