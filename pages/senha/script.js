const senha = document.getElementById("senha");
document.addEventListener('keypress', (event) => {
    if(event.code == "Enter"){
        if(senha.value == "amo_pacoca"){
            window.location.href ="../hehe/index.html";
        }else if(verificar_senha(senha.value)){
            window.location.href ="../../index.html";
        }
    }   
});
function verificar_senha(value){
    
    var password = 840720870402702400000;
    try{
        var code = [];
        var codeNum = 0;
        for(i=0;i<value.length;i++){
            code.push(value.charCodeAt(i));
            codeNum += value.charCodeAt(i)*Math.pow(127,i);
        }
        return codeNum == password
    }catch{
        return false;
    }
}