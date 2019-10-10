const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200), 20, "blue", "yellow", true);
let B = new Point(new Vector2d(500,300), 20, "red", "yellow", true);
let C = new Point(new Vector2d(400,800), 20, "black", "yellow", true);
let D = new Point(new Vector2d(300,100), 20, "gray", "yellow", true);

let S = new Point(new Vector2d(500,500), 10, "white", "yellow", false);

let l = new LinearFunction(1,1);
let m = new LinearFunction(-1,100);

let grid = new Grid();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0, 0, width, height);
  l.defineLineWithTwoPoints(A,B);
  m.defineLineWithTwoPoints(C,D);

grid.draw(context);

  l.draw(context);
  m.draw(context);

  S.position.dx = l.intersection(m).x;
  S.position.dy = l.intersection(m).y;

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);

  S.draw(context);
}
animate();