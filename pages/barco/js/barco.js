class Barco{
    constructor(context, x,y,speed){
        this.context = context;
        this.coo = new Vector(x,y);
        this.positions = [];
        this.speed = speed;


    }

    updatePosition(){
        if (this.positions.length == 0)return;
        const point = this.positions[0];
        if((point.coo.x==this.coo.x) && (point.coo.y==this.coo.y)){
            this.positions.shift();
            return;
        }
        const x = this.coo.x - (this.cos(point.coo) * this.speed);
        const y = this.coo.y - (this.sin(point.coo) * this.speed);
        this.coo = new Vector(x,y);
        if( Math.round(x/this.speed)==Math.round(point.coo.x/this.speed) &&
            Math.round(y/this.speed)==Math.round(point.coo.y/this.speed)){
            this.positions.shift();
        }
    }

    distance(coo){
        const x = coo.x - this.coo.x;
        const y = coo.y - this.coo.y;
        const h = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
        return h;
    }
    cos(coo){return (this.coo.x - coo.x)/this.distance(coo);}
    sin(coo){return (this.coo.y - coo.y)/this.distance(coo);}

    setMovement(positions){
        this.positions = positions;
    }

    isMoving(){
        return (this.positions.length != 0);
    }

    clearPosition(){
        this.positions = [];
    }


    draw(){ 
        const size = 50;
        const img = document.getElementById("barco");
        ctx.drawImage(img, this.coo.x-(size/2), this.coo.y-(size/2),size, size);

        /*
        const c = this.context;
        const color = "#FF0000";
        const r = 5;
        c.beginPath();
        c.arc(this.coo.x, this.coo.y, r, 0, 2 * Math.PI);
        c.fillStyle = color;
        c.strokeStyle = 'transparent';
        c.fill();
        c.stroke();
        */
    }
}