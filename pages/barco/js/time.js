function data(){return new Date()};

var _time;

function write(){
    const t = _time.format(_time.relogio(_time.diferenca_tempo(_time.start_time)))
    _time.time = t.min.toString()+":"+t.sec.toString()+":"+t.mil.toString();
}

class Time {
    constructor(time_element = HTMLElement){
        this._time = time_element
        _time = this;
    }
    get time(){return this._time.innerHTML}
    set time(el){this._time.innerHTML = el}

    start(){
        this.start_time = data()
        this.interval = setInterval(write,10);
    }
    stop(){
        clearInterval(this.interval);
    }
    diferenca_tempo(_startTime) {
        return (data().getTime() - _startTime.getTime());
    }

    relogio(_diferenca) {
        const mil = (_diferenca % 1000)
        const sec = ((_diferenca % 60000) - mil)/1000
        const min = ((_diferenca) - (mil) -(sec * 1000))/60000
        return {"min": min,"sec":sec,"mil":mil}
    }
    format(values) {
        const min = values.min.toString();
        const sec = ((values.sec.toString().length>1)?"":"0")+values.sec.toString()
        const mil = ((values.mil.toString().length>2)?"":(values.mil.toString().length>1)?"0":"00")+values.mil.toString()
        return {"min": min,"sec":sec,"mil":mil}
    }


}