const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let frontWheel = new Image();
frontWheel.rot = 0;
frontWheel.src = "wheel.png";
frontWheel.pos =0;
frontWheel.vel = 10;

let backWheel = new Image();
backWheel.rot = 0;
backWheel.src = "wheel.png";

let car = new Image();
car.src = "car1.png";

animate();

addEventListener('keydown',(evt)=>{
  switch (evt.key) {
    case "ArrowRight":
      frontWheel.vel += 1;
      break;
      case "ArrowLeft":
      frontWheel.vel -= 1;
      break;
    default:

  }
})

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  context.drawImage(car,frontWheel.pos-754,300);

  context.save();
  context.translate(frontWheel.pos+180,560);
  context.rotate(frontWheel.rot);
  context.drawImage(frontWheel,-frontWheel.width/2,-frontWheel.height/2);
  context.restore();

  context.save();
  context.translate(frontWheel.pos-500,560);
  context.rotate(frontWheel.rot);
  context.drawImage(backWheel,-backWheel.width/2,-backWheel.height/2);
  context.restore();

  frontWheel.rot += frontWheel.vel/80;
  frontWheel.pos += frontWheel.vel;

  if(frontWheel.pos>canvas.width+car.width){
    frontWheel.pos = 0;
  }
  if(frontWheel.pos<0){
    frontWheel.pos = canvas.width;
  }}
