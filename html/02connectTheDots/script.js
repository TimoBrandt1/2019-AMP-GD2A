const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];
let maxPoints = 4;
let pointsClicked;

if(pointsClicked == maxPoints){
    context.clearRect(0,0,width,height);
    SpawnPoints();
    pointsClicked = 0;
}

SpawnPoints();

function SpawnPoints(){
    for (let i = 0; i < maxPoints; i++) {
        let ball = new Point(new Vector2d(RandomNumber(width - 20), RandomNumber(height - 20)), 20, "red");
        points.push(ball);
        points[i].draw(context);
    }      
}

function animate() {
  requestAnimationFrame(animate);
  context.beginPath();
  context.moveTo(points[0].position.dx, points[0].position.dy);

  for (let i = 1; i < points.length; i++) {
    context.lineTo(points[i].position.dx, points[i].position.dy);
  }
  context.lineTo(points[0].position.dx, points[0].position.dy);
  context.fillstyle = "red";
  context.strokeStyle = "green";
  context.fill();
  context.stroke();
  context.closePath();
}
animate();

window.addEventListener('click',(evt)=>{
    let mouseVector =  new Vector2d(evt.clientX,evt.clientY);
    for(let i = 0; i < points.length; i++){
        let distanceMousePoint = new Vector2d(0,0);
        distanceMousePoint.diffVector(mouseVector,points[i].position)
        if (distanceMousePoint.magnitude < 20 && points[i].color != "blue"){
            points[i].color = "gold";  
            points[i].draw(context);
            pointsClicked++;
        }
    }
});

function RandomNumber(max) {
    return Math.floor(Math.random() * max)
}