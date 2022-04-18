class Projetil{
    constructor (context,x,y,r,color){
        this.context = context
        this.coo = new Vector(x,y);
        this.r = r;
        this.color = color;
        this.velocidade = new Vector(0,0);
        this.aceleracao = new Vector(0,0);
    }

    updatePosition(){
        this.velocidade = this.velocidade.plus(this.aceleracao);
        this.coo = this.coo.plus(this.velocidade);
        this.aceleracao = new Vector(0,0);
    }
    colosion(x,y){
        this.aceleracao = new Vector(0,0);

        //var v = this.velocidade;
        this.velocidade = new Vector(0,0);//new Vector(-1*x*(v.x),-1*y*(v.y));
    }
    addForce(x,y){
        this.aceleracao = this.aceleracao.plus(new Vector(x,y));
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
}