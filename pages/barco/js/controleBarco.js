//classe com exemplos de como calcular a rota do barco para passar por todas as plataformas

class ControleBarco{
    static random(porto,values = []){
        var results = []
        while (values.length > 0){
            const randId = Math.floor(Math.random()*values.length);
            results.push(values[randId]);
            values.splice(randId,1);
        }
        results.unshift(porto);
        results.push(porto);
        return results;
    }
    static near(porto,values = []){
        var results = [porto];
        while (values.length > 0){
            var last = results[results.length -1]
            var near = values[0];
            var nearId = 0;

            var near_distance = Plataformas.distance(last,near);
            values.map((value,i)=>{
                const new_distance = Plataformas.distance(last,value);
                if(new_distance<near_distance){
                    near_distance = new_distance;
                    near = value;
                    nearId = i;
                }
            })
            results.push(near);
            values.splice(nearId,1);
        }
        results.push(porto);
        return results;

    }
    static fast(porto,values = []){
        const possi = fatorial(values.length);
        console.log(possi)
        var test_way = Array.from(values)
        test_way.unshift(porto);
        test_way.push(porto);
        var fast_way = test_way;
        var fast_way_distance = this.total_distance(test_way);
        possi.map((el)=>{
            var results = el.map((el)=>{return values[el]})
            results.unshift(porto);
            results.push(porto);
            const distance = this.total_distance(results);
            if(fast_way_distance > distance){
                fast_way = results;
                fast_way_distance = distance;
            }
        })      
        return fast_way;
    }

    static total_distance(values = []){
        var distance = 0;
        for(var i = 1; i<values.length;i++){
            distance += Plataformas.distance(values[i-1],values[i]);
        }
        return distance;
        
    }


}


