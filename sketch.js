function setup() {
    const canvas = createCanvas(720, 400);
    canvas.parent('container');

}
function draw() {
    background(102);    // 색깔칠하기 255

    push(); //?

    translate(width *0.2, height * 0.5);
    rotate(frameCount / 200.0)
    star(0,0,5,70,3);
    pop();

}

function star(x, y, radius1, raduis2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape(); // 쉐이프 그리기 vertex 와 함께 쌍으로 쓴다
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * raduis2;
    let sy = y + sin(a) * raduis2;
    vertex(sx, sy); // 꼭지점
    sy = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);  // CLOSE 를 하면 모양이 닫힌다
}