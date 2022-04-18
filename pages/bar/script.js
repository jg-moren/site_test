document.querySelector('.year').innerHTML = (new Date()).getFullYear();


setInterval(()=>{
    setPercent((getDay()/getYear())*100)
//    document.documentElement.style.setProperty('--percent_day',getTime().toString()+"%");

},10)

/*
function getTime(){
    const date = new Date();
    return (date.getTime() - new Date(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours()))*100 /1000 / 60 / 60 ;

    //return (date.getTime() - new Date(date.getFullYear(),date.getMonth(),date.getDate()))*100 /1000 / 60 / 60 /24;
}*/

function getDay(){
    const date = new Date();
    return (date.getTime() - new Date(date.getFullYear(),0,0)) /1000 / 60 / 60 /24;
}

function getYear(){
    const ano = (new Date()).getFullYear();
    if((ano % 4 == 0 && ano%100!=0)||ano%400==0){
        return 366;
    }else{
        return 365;
    }
}

function setPercent(value){
    document.querySelector('.percent_int').innerHTML = getPercent(value,10000000).toString().split(".")[0];
    document.querySelector('.percent_float').innerHTML = getPercent(value,10000000).toString().split(".")[1];
    document.documentElement.style.setProperty('--percent',value.toString()+"%");
};

const getPercent = (value,size) => Math.floor(value*(size))/(size);
