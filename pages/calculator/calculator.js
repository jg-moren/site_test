class calcController{
    
    
    constructor (){
        this._display = document.querySelector(".display");
        this._displayTime = document.querySelector(".time");
        this._buttons = document.querySelectorAll("#tecla");

        this._number1;
        this._number2;
        this._sign;

        this.looptime();
        this.clickButtons();
    }
    looptime(){
        setInterval(()=>{this.time = this.nowTime.toLocaleTimeString("pt-br")},500);
    }

    clickButtons(){
        
        this._buttons.forEach((button)=>{
            button.addEventListener('click',()=>{
                switch(button.className){
                    case "num":
                        this.number = button.innerHTML;
                        break;
                    case "signs":
                        this._sign = button.innerHTML;
                        break;
                    case "equal":
                        alert("aaa");
                        break;

                }
                this.display = button.innerHTML;
            })
        })
    }
    set signal(value) {
        this._signal.innerHTML = value;
    }


    set time(value){
        this._displayTime.innerHTML = value;
    }
    get time(){
        return this._displayTime.innerHTML;
    }
    get nowTime(){
        return new Date();
    }

    set display(value) {
        this._display.innerHTML = value;

    }
    get display(){
        return this._display.innerHTML;
    }

    set number(value){
        if(this._sign == null){
            this._number1 = value;
        }else{
            this._number2 = value;
        }
    }
    get number(){
        if(this._sign == null){
            return this._number1;
        }else{
            return this._number2;
        }
    }

}