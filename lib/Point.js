class Point {

    constructor(position,radius,color,borderColor, draggable){
        this.radius = radius;
        this.color = color;
        this.borderColor = borderColor;
        this.position = position;
        this.draggable = draggable || false;
        if(this.draggable){
            this.drag();
          }
    }

    draw(context){
        context.beginPath();
        context.strokeStyle = this.borderColor;
        context.fillStyle = this.color;
        context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
        context.stroke();
        context.fill();
        context.closePath();
    }

    drag(){
        let dragging = false;
    
        window.addEventListener('mousedown',(evt)=>{
          let mouse = new Vector2d(evt.clientX,evt.clientY);
          let difference = new Vector2d(0,0);
          difference.differenceVector(mouse,this.position);
          if(difference.magnitude <= this.radius){
            dragging = true;
          }
        });
    
        window.addEventListener('mouseup',(evt) => {
          dragging = false;
        });
    
        window.addEventListener('mousemove',(evt) =>{
          if(dragging){
            this.position.dx = evt.clientX;
            this.position.dy = evt.clientY;
          }
        })
      }
}