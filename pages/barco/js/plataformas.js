class Plataformas{
    static instances = [];

    static drawAll(){
        Plataformas.instances.map((value)=>{
            value.draw();
        });
    }

    static distance(a,b){
        const x = a.coo.x - b.coo.x;
        const y = a.coo.y - b.coo.y;
        const h = Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
        return h;
    }

    constructor(context,x,y){
        this.context = context;
        this.coo = new Vector(x,y);
        Plataformas.instances.push(this);
    }
    
    draw(){ 
        const size = 50;
        const img = document.getElementById("plataforma");
        ctx.drawImage(img, this.coo.x-(size/2), this.coo.y-(size/2),size, size);
        /*
        const c = this.context;
        const color = "#999999";        
        c.beginPath();
        c.rect(this.coo.x-10, this.coo.y-10, 40, 40);
        c.fillStyle = color;
        c.fill();
        */
    }
}
