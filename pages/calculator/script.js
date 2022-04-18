let calc = new calcController();
calc.display="3";

let display = document.querySelector(".display");



document.querySelector(".display").addEventListener('click',(event)=>window.alert(calc.display));