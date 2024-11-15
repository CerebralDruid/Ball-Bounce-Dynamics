// Constants
let g = 9.8/10;
let mu = -0.9;
let hardness = 1;
let cor = 0.91;
let num_of_balls = 3;
let width = window.innerWidth - 20;
let height = window.innerHeight - 20;
let ID = 0;

let B = [];

function setup() {
    createCanvas(width, height);
}

function mousePressed() {
    B.push(new Ball(mouseX, mouseY, 120, ID, B));
    ID += 1;
}

function draw() {
    background(0);
    for (let i = 0; i < B.length; i++) {
        B[i].collision();
        B[i].move(frameCount/1000);
        B[i].display();
        if (B[i].diam < 0.001) {
            B.slice(i, 1);
        }
    }
}
