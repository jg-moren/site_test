class Planeta {
    constructor(context,x,y,r,m,color){
        this.coo = new Vector(x,y);
        this.context = context;
        this.r = r;
        this.m = m;
        this.color = color;
    }

    draw(){ 
        const c = this.context;
        c.beginPath();
        c.arc(this.coo.x, this.coo.y, this.r, 0, 2 * Math.PI);
        c.fillStyle = this.color;
        c.strokeStyle = 'transparent';
        c.fill();
        c.stroke();
    }

    colosion(obj){
        if(this.distancia(obj)<this.r+obj.r){
            obj.colosion(this.cos(obj),this.sin(obj));
        }
    }

    gravidade(obj){
        const d = this.distancia(obj);
        const f = this.m/Math.pow(d,2);
        const x = f * this.cos(obj);
        const y = f * this.sin(obj);
        obj.addForce(x,y);
    }
    

    sin(obj){return (this.coo.y - obj.coo.y)/this.distancia(obj)}
    cos(obj){return (this.coo.x - obj.coo.x)/this.distancia(obj)}

    distancia (obj){
        const x = this.coo.x - obj.coo.x;
        const y = this.coo.y - obj.coo.y;
        var h  = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
        return h;
    }
    
}