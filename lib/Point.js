class Point {
    constructor(position,radius,color){
        this.position = position;
        this.radius = radius;
        this.color = color;
    }

    draw(context){
        context.beginPath();
        context.strokeStyle = "red";
        context.fillStyle = this.color;
        context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
        context.stroke();
        context.fill();
        context.closePath();
    }
}

class Rectangle {
    constructor(position,Rwidth,Rheight,color){
        this.position = position;
        this.Rwidth = this.Rwidth;
        this.Rheight = this.Rheight;
        this.color = color;
    }

    draw(context){
        context.beginPath();
        context.strokeStyle = "red";
        context.fillStyle = this.color;
        context.rect(this.position.dx,this.position.dy,this.Rwidth,this.Rheight,0);
        context.stroke();
        context.fill();
        context.closePath();
    }
}
