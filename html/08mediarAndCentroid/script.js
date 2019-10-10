const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),20,"lime","red",true);
let B = new Point(new Vector2d(500,500),20,"gold", "red", true);
let C = new Point(new Vector2d(600,200),20,"red", "red", true);

let D = new Point(new Vector2d(30,30),10,"white", "", false);
let E = new Point(new Vector2d(30,30),10,"white", "", false);
let F = new Point(new Vector2d(30,30),10,"white", "black", false);

let S = new Point(new Vector2d(0,0),5,"blue", "", false);

let l = new LinearFunction(0,0);
let m = new LinearFunction(0,0);
let n = new LinearFunction(0,0);

let o = new LinearFunction(0,0);
let p = new LinearFunction(0,0);
let q = new LinearFunction(0,0);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  l.defineLineWithTwoPoints(A,B);
  m.defineLineWithTwoPoints(B,C);
  n.defineLineWithTwoPoints(C,A);

  o.defineLineWithTwoPoints(D,C);
  p.defineLineWithTwoPoints(E,A);
  q.defineLineWithTwoPoints(F,B);

  l.draw(context);
  m.draw(context);
  n.draw(context);

  o.draw(context);
  p.draw(context);
  q.draw(context);

  D.position.dx = (A.position.dx + B.position.dx)/2;
  D.position.dy = (A.position.dy + B.position.dy)/2;
  E.position.dx = (B.position.dx + C.position.dx)/2;
  E.position.dy = (B.position.dy + C.position.dy)/2;
  F.position.dx = (C.position.dx + A.position.dx)/2;
  F.position.dy = (C.position.dy + A.position.dy)/2;

  S.position.dx = q.intersection(p).x;
  S.position.dy = q.intersection(p).y;

  A.draw(context);
  B.draw(context);
  C.draw(context);

  D.draw(context);
  E.draw(context);
  F.draw(context);

  S.draw(context);
}

animate();

