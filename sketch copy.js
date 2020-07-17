function setup() {
    createCanvas(720, 400);
    background(51)
    noStroke();
    // noLoop();
}

let s =1
function draw() {
    drawTarget(width * 0.25, height * 0.4, 200, 4);
    drawTarget(width * 0.5, height * 0.5, 300, s);
    s++;
    if(s> 100) {
        s=1;
    }
}

function drawTarget(x, y, size, num) {
    const grayValues = 255/ num;

    const steps = size /num;
    for(let i=0; i< num; i++){
        fill(i* grayValues);
        ellipse(x,y,size - i * steps, size -i *steps)
    }
}

