function setup() {
    const canvas = createCanvas(600, 400);
    canvas.parent('container');

}
function draw() {
    background(102);    // 색깔칠하기 255

    push(); //?

    translate(width *0.2, height * 0.5);
    rotate(frameCount / 200.0)
    polygon(0,0,82,3);
    pop();

    push();

}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape(); // 쉐이프 그리기 vertex 와 함께 쌍으로 쓴다
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy); // 꼭지점
  }
  endShape(CLOSE);  // CLOSE 를 하면 모양이 닫힌다
}