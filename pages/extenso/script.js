let numero = document.querySelector("#numero");
let num = document.querySelector(".num");

document.querySelector("#botao").addEventListener('click',()=>{
    num.innerHTML = (Extenso.numExtenso(numero.value));
})

