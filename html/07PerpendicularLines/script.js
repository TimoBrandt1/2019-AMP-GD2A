const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),20,"lime","red",true);
let B = new Point(new Vector2d(500,500),20,"gold", "red", true)
let C = new Point(new Vector2d(500,200),20,"white", "red", true)

let S = new Point(new Vector2d(500,500), 10, "white", "yellow", false);

let l = new LinearFunction(0,0);
let m = new LinearFunction(0,0);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  l.defineLineWithTwoPoints(A,B);
  l.draw(context);
  m.slope = - 1/l.slope;

  S.position.dx = l.intersection(m).x;
  S.position.dy = l.intersection(m).y;
  
  m.intercept = C.position.dy - m.slope*C.position.dx;

  m.draw(context);
  A.draw(context);
  B.draw(context);
  C.draw(context);
  S.draw(context);
}

animate();

