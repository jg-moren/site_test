var canvas = document.getElementById("oceano");
var time = new Time(document.getElementById("time"));
var ctx = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;


var b = new Barco(ctx, centerX, centerY, 10);

var porto = new Plataformas(ctx, centerX, centerY);
var p1 = new Plataformas(ctx, 100, 100);
var p2 = new Plataformas(ctx, 200, 100);
var p3 = new Plataformas(ctx, 300, 100);
var p4 = new Plataformas(ctx, 400, 100);
var p5 = new Plataformas(ctx, 100, 200);
var p6 = new Plataformas(ctx, 200, 200);
var p7 = new Plataformas(ctx, 300, 200);
var p8 = new Plataformas(ctx, 400, 200);
var p9 = new Plataformas(ctx, 100, 300);
var p10 = new Plataformas(ctx, 200, 300);
var p11 = new Plataformas(ctx, 300, 300);
var p12 = new Plataformas(ctx, 400, 300);
var p13 = new Plataformas(ctx, 100, 400);
var p14 = new Plataformas(ctx, 200, 400);
var p15 = new Plataformas(ctx, 300, 400);
var p16 = new Plataformas(ctx, 400, 400);


const move = ControleBarco.near(porto, [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16])
b.setMovement(move);

document.getElementById("distance").innerHTML = ControleBarco.total_distance(move);
time.start()

setInterval(loop, 100);
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Plataformas.drawAll();
    b.draw();
    b.updatePosition();
    if (!b.isMoving()) { time.stop() }


}

