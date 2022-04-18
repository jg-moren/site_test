function fatorial(num){
    const value = Array(num).fill("").map((_,i)=>{return i+1;});//cria um array com os valores do el == i
    var array = []
    var fn =(values = [], filled = [])=>{
        var other_values = values.filter((v)=>{return !(filled.find((e)=>{return e == v}))});//values - filled
        other_values.map((el)=>{
            var list = Array.from(filled);
            list.push(el);
            if(values.length != list.length){
                fn(values,list);
            }else{
                array.push(list);
            }
        })   
    }
    fn(value,[]);
    array = array.map((v)=>{return v.map((v2)=>{return v2-1})})// -1 de todos os valores
    return (array);
}