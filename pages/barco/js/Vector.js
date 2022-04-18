

class Vector{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(v2){
        return new Vector(this.x + v2.x,this.y + v2.y);
    }
    reduce(i){
        const x = this.x / i;
        const y = this.y / i;
        return new Vector(x,y);
    }
    reverse(){
        return new Vector(-this.x,-this.y);
    }
}