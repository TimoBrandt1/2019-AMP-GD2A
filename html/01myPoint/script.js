const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];
let MaxPoint = 10;
let Score = 0;
let ScoreNeeded = 10;

function MaxPoints(){
    for(let i=0; i<MaxPoint; i++){
        let A = new Point(new Vector2d(GetRandom(width - 30),GetRandom(height - 30)),30,"red");
        points.push(A);
    }    
}

function animate(){
    if(Score == ScoreNeeded){
        Score = 0;
        context.clearRect(0,0,width,height);
        ScoreNeeded = ScoreNeeded*2;
        MaxPoint = MaxPoint*2;
        MaxPoints();
    }
    requestAnimationFrame(animate);
    for(let i = 0; i < points.length; i++){
        points[i].draw(context);
    }
}

MaxPoints();
animate();

window.addEventListener('click',(evt)=>{
    let mouseVector =  new Vector2d(evt.clientX,evt.clientY);
    for(let i = 0; i < points.length; i++){
        let distanceMousePoint = new Vector2d(0,0);
        distanceMousePoint.diffVector(mouseVector,points[i].position)
        if (distanceMousePoint.magnitude < 30 && points[i].color != "blue"){
            points[i].color = "blue";
            Score++;
            console.log(Score);
            
        }
    }
});

function GetRandom(max){
    return Math.floor(Math.random() * max);
}
