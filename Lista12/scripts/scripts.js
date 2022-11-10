function validar1(){
    var valor1 = document.getElementById("v1").value;
    var p1 = /^\d{2}\/\d{2}\/\d{2,4}$/;
    
    if(p1.test(valor1)){
        alert("Ok")
    }else{
        alert("Invalido")
    }
}
//----------------------------------------------------//
function validar2(){
    var valor2 = document.getElementById("v2").value;
    var p2 = /\d{3}.\d{3}.\d{3}-\d{2}$/;
    
    if(p2.test(valor2)){
        alert("Ok")
    }else{
        alert("Invalido")
    }
}
//----------------------------------------------------//
function validar3(){
    var valor3 = document.getElementById("v3").value;
    var p3 = /^(I|i)(F|f)(T|t)(M|m)-\d{3}\/\d{3}-\w{2}$/;
    
    if(p3.test(valor3)){
        alert("Ok")
    }else{
        alert("Invalido")
    }
}
//----------------------------------------------------//
function validar4(){
    var valor4 = document.getElementById("v4").value;
    var p4 = /^(M|m)(T|t)-\d{2}.\d{3}-(I|i)(F|f)(T|t)(M|m)}$/;
    
    if(p4.test(valor4)){
        alert("Ok")
    }else{
        alert("Invalido")
    }
}
//----------------------------------------------------//
function validar1(){
    var valor1 = document.getElementById("v1").value;
    var p1 = /\d{2}\/\d{2}\/\d{2,4}$/;
    
    if(p1.test(valor1)){
        alert("Ok")
    }else{
        alert("Invalido")
    }
}
//----------------------------------------------------//