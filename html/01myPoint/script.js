const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = [];



function animate(){
    context.clearRect(0,0,width,height);
    requestAnimationFrame(animate);
    let color = "rgb(" + getRandom(255) + "," + getRandom(255) + "," + getRandom(255) + ")"
    let A = new Point(new Vector2d(getRandom(width),getRandom(height)),getRandom(100),color);
    A.draw(context);
    points.push(A);

    for(let i= 0; i < points.length; i++){
        points[i].radius++;
        points[i].draw(context);
        if(points[i].radius > 200){
            points.splice(i,1);
        }
    }
}

animate();

function getRandom(max){
    let ans = Math.floor(Math.random()* max);
    return ans;
}