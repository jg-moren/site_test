class exController{
    constructor(){
        self.numeros_extensos = {
            "1":["cento","","um"],
            "2":["duzentos","vinte","dois"],
            "3":["trezentos","trinta","tres"],
            "4":["quatrocentos","quarenta","quatro"],
            "5":["quinhentos","cinquenta","cinco"],
            "6":["seissentos","sessenta","seis"],
            "7":["setecentos","setenta","sete"],
            "8":["oitocentos","oitenta","oito"],
            "9":["novecentos","noventa","nove"],
            "0":["","",""]
        }
        self.decimal = {
            "10":"dez",
            "11":"onze",
            "12":"doze",
            "13":"treze",
            "14":"quatorze",
            "15":"quinze",
            "16":"dezesseis",
            "17":"dezessete",
            "18":"dezoito",
            "19":"dezenove"
        }
        self.milP = [""," mil "," milhoes "," bilhoes "," trilhoes "]
        self.milS = [""," mil ","um milhao ","um bilhao ","um trilhao "]

    }
    numExtenso(num){
        let ex = this._separar_centenas(num);
        let extenso = ex.map((value)=>this._extenso_centena(value));
        
        let result = "";
        extenso.forEach((num,index)=>{
            if(num != ""){
                if(num == "um"){
                    result += num + milS[extenso.length -1- index];
                }else{
                    result += num + milP[extenso.length -1- index];
                }
            }
        })

        

        return result;
    }
    _extenso_centena(num){
        let extenso = "";
        if(num == "100")return "cem";
        for(let x =0;x<num.length;x++){

            if(num[x]==1 && x+(3-num.length) == 1){
                return extenso += decimal[num[x]+num[x+1]]
            }


            extenso += numeros_extensos[num[x]][x+(3-num.length)];
            if(x != num.length-1){
                extenso += " e "
            }
            if(num[x]==0){
                extenso = extenso.slice(0,-3);
            }
        }
        return extenso;
    }
    _separar_centenas(num){
        let add = "";
        let result = [];
        for(let x=num.length;0 < x;x--){
            if((num.length-x) % 3 == 0){
                result.unshift(add);
                add = "";
            }
            add = num[x-1]+add;
        }
        result.unshift(add);
        result.pop();
        return result;
    }

}
window.Extenso = new exController();
