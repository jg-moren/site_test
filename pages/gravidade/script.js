var canvas = document.getElementById("universo");
var ctx = canvas.getContext("2d");

const centerX = canvas.width/2;
const centerY = canvas.height/2;

/*
var satelite = new Projetil(ctx,centerX-70,centerY,5,"#FFFFFF");

var terra = new Planeta(ctx,centerX,centerY,60,500,"#0000FF");

var lua = new Planeta(ctx,centerX+400,centerY,10,7,"#999999");

const precisao = 100;
const vetorForca = new Vector(0,351)
satelite.addForce(vetorForca.x / precisao,vetorForca.y / precisao);

setInterval(update,1);
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    terra.gravidade(satelite);
    //lua.gravidade(satelite);

    terra.colosion(satelite);
    lua.colosion(satelite);

    satelite.updatePosition();

    terra.draw();
    lua.draw();
    satelite.draw();
}*/

const Sol = new Planeta(ctx,centerX,centerY,50,4000,"#FFFF00");

const Mercurio = new Projetil(ctx,centerX+75,centerY,5,"#777777");
const Venus = new Projetil(ctx,centerX+110,centerY,10,"#AA9933");
const Terra = new Projetil(ctx,centerX+160,centerY,11,"#0000FF");
const Marte = new Projetil(ctx,centerX+200,centerY,10,"#FF0000");

const precisao = 100;
const vetorMercurio = new Vector(0,720)
const vetorVenus = new Vector(0,600)
const vetorTerra = new Vector(0,500)
const vetorMarte = new Vector(0,450)

Mercurio.addForce(vetorMercurio.x / precisao,vetorMercurio.y / precisao);
Venus.addForce(vetorVenus.x / precisao,vetorVenus.y / precisao);
Terra.addForce(vetorTerra.x / precisao,vetorTerra.y / precisao);
Marte.addForce(vetorMarte.x / precisao,vetorMarte.y / precisao);

setInterval(sistemaSolar,10);
function sistemaSolar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    Sol.gravidade(Mercurio);
    Sol.gravidade(Venus);
    Sol.gravidade(Terra);
    Sol.gravidade(Marte);

    Sol.colosion(Mercurio);
    Sol.colosion(Venus);
    Sol.colosion(Terra);
    Sol.colosion(Marte);

    Mercurio.updatePosition();
    Venus.updatePosition();
    Terra.updatePosition();
    Marte.updatePosition();

    Sol.draw();
    Mercurio.draw();
    Venus.draw();
    Terra.draw();
    Marte.draw();
}



