
const grid_size =10
const screen_size = 600;
const color_snake = "#FFF";
const color_food = "#FFF";
var speed = 500;
const grid = document.getElementById("grid");
const msg = document.getElementById("msg");
document.documentElement.style.setProperty('--grid-size', grid_size);
document.documentElement.style.setProperty('--size', screen_size/grid_size +"px");


for(y = 0 ; y<grid_size;y++){
    for(x = 0 ; x<grid_size;x++){
        grid.innerHTML = grid.innerHTML + "<div id="+y+"-"+x+" class='bloco'></div>";

    }
}

//[x,y]
var movement = [1,0];
var position = [2,2];
var snake = [position];
var next_movement=movement;
var food = [0,0];


const senha = document.getElementById("senha");
document.addEventListener('keypress', (event) => {

    if(movement[1]==0){
        switch(event.code){
            case "KeyW":
                movement = [0,-1]
                move_snake();
                break;
            case "KeyS":
                movement = [0,1]
                move_snake();
                break;
        }
    }
    if(movement[0]==0){
        switch(event.code){
            case "KeyD":
                movement = [1,0]
                move_snake();
                break;
            case "KeyA":
                movement = [-1,0]
                move_snake();
                break;
        }
    }
});

var interval = setInterval(move_snake, speed);

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(move_snake, speed);
}

function move_snake(){
    clean_grid();
    position = [position[0]+movement[0],position[1]+movement[1]];
    if(verify_dead()){
        msg.innerHTML = "Game Over";
    }
    snake.push(position);

    if(position[0] == food[0] && position[1] == food[1]){
        eat_food();
    }else{
        snake.shift();
    }

    draw_food();
    draw_snake();
    
    resetInterval();
}

function verify_dead(){
    var result = false;
    snake.map(function(value){
        if((value[0] == position[0] && value[1] == position[1])){
            result = true;
        }
    })
    if( position[0]<0 ||
        position[1]<0 ||
        position[0]>=grid_size ||
        position[1]>=grid_size ){
            result = true;
    }
    return result;
}

function kill(){

}

function draw_snake(){
    snake.map(function(coo){ 
        document.getElementById(coo[1]+"-"+coo[0]).style.background = color_snake;
    });
}

function draw_food(){
    document.getElementById(food[1]+"-"+food[0]).style.background = color_food;
}
function eat_food(){
    food = [Math.floor(Math.random()*grid_size),Math.floor(Math.random()*grid_size)];
    snake.map(function(value){
        if((value[0] == food[0] && value[1] == food[1])){
            eat_food();
        }
    })
}

function clean_grid(){
    for(y = 0 ; y<grid_size;y++){
        for(x = 0 ; x<grid_size;x++){
            document.getElementById(y+"-"+x).style.background = null;
        }
    }
}
