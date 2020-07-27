function setup() {
    const canvas = createCanvas(600, 400);
    canvas.parent('container');

}
let r= 1;
function draw() {
    clear();
    for(let i=0; i < 6 ; i++) {
        let xPos = mouseX + Math.cos(i* 60) * r;
        let yPos = mouseY + Math.sin(i* 60) * r;
        ellipse(xPos, yPos, 5, 5)
    }

    r +=2;

    if(r> 100) {
        r =1;
    }
}