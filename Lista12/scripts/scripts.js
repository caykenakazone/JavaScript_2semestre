function validar1(){
    var valor1 = document.getElementById("v1").value;
    var p1 = /^\d{2}\/\d{2}\/\d{2,4}$/;
    
    if(p1.test(v1)){
        alert("Ok")
    }else{
        alert("Invalido")
    }
}