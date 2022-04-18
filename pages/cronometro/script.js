const tempo = document.querySelector("#tempo");
var cronometro;
var startTime;
document.addEventListener("keydown",(key)=>{
    if(cronometro != null){
        clearInterval(cronometro);
    }else{
        tempo.innerHTML = "0:00:000"
    }
})

document.addEventListener("keyup",(key)=>{
    if(cronometro != null){
        cronometro = null
    }else{
        startTime = data()
        cronometro = setInterval(start,10);
    }
})


var start = ()=> {
    const t = format(relogio(diferenca(startTime)))
    tempo.innerHTML = t.min.toString()+":"+t.sec.toString()+":"+t.mil.toString();

}

function data(){return new Date()};

function diferenca(_startTime) {return (data().getTime() - _startTime.getTime())}

function relogio(_diferenca) {
    const mil = (_diferenca % 1000)
    const sec = ((_diferenca % 60000) - mil)/1000
    const min = ((_diferenca) - (mil) -(sec * 1000))/60000
    return {"min": min,"sec":sec,"mil":mil}
}

function format(values) {
    const min = values.min.toString();
    const sec = ((values.sec.toString().length>1)?"":"0")+values.sec.toString()
    const mil = ((values.mil.toString().length>2)?"":(values.mil.toString().length>1)?"0":"00")+values.mil.toString()
    return {"min": min,"sec":sec,"mil":mil}
}

var dark = true;
function change_color() {
    document.body.style.background = (dark)?"#FFF":"#000";
    tempo.style.color = (dark)?"#000":"#FFF";
    dark = dark?false:true;
}


