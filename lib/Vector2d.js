class Vector2d{
    constructor(dx,dy){
        this.dx = dx;
        this.dy = dy;
    }

    Distance(vector2) {
        var diffReturn = 0;

        var dx = this.dx - vector2.dx;
        var dy = this.dy - vector2.dy;

        return Math.sqrt(dx*dx+dy*dy);
    }
    differenceVector(a,b){
        this.dx = a.dx - b.dx;
        this.dy = a.dy - b.dy;
      }
    get magnitude(){
        return Math.sqrt(this.dx*this.dx + this.dy*this.dy)
    }
}