function validar1() {
    var valor1 = document.getElementById("v1").value;
    var p1 = /^\d{2}\/\d{2}\/\d{2,4}$/;

    if (p1.test(valor1)) {
        alert("Ok")
    } else {
        alert("Invalido")
    }
}
//----------------------------------------------------//
function validar2() {
    var valor2 = document.getElementById("v2").value;
    var p2 = /\d{3}.\d{3}.\d{3}-\d{2}$/;

    if (p2.test(valor2)) {
        alert("Ok")
    } else {
        alert("Invalido")
    }
}
//----------------------------------------------------//
function validar3() {
    var valor3 = document.getElementById("v3").value;
    var p3 = /^(I|i)(F|f)(T|t)(M|m)-\d{3}\/\d{3}-\w{2}$/;

    if (p3.test(valor3)) {
        alert("Ok")
    } else {
        alert("Invalido")
    }
}
//----------------------------------------------------//
function validar4() {
    var valor4 = document.getElementById("v4").value;
    var p4 = /^(M|m)(T|t)-\d{2}.\d{3}-(I|i)(F|f)(T|t)(M|m)$/;

    if (p4.test(valor4)) {
        alert("Ok")
    } else {
        alert("Invalido")
    }
}
//----------------------------------------------------//
function validar5() {
    var valor5 = document.getElementById("v5").value;
    var p5 = /^MT-\d{2}.\d{3}-(I|i)(F|f)(T|t)(M|m)$/;

    if (p5.test(valor5)) {
        alert("Ok")
    } else {
        alert("Invalido")
    }
}
//----------------------------------------------------//
function validar6() {
    var valor6 = document.getElementById("v6").value;
    var p6 = /^(M|m)\s{1}(T|t)-\d{2}.\d{3}-(I|i)\s{1}(F|f)\s{1}(T|t)\s{1}(M|m)$/;

    if (p6.test(valor6)) {
        alert("Ok")
    } else {
        alert("Invalido")
    }
}
//----------------------------------------------------//
function validar7() {
    var valor7 = document.getElementById("v7").value;
    var p7 = /^(M|m)\s{0,1}(T|t)-\d{2}.\d{3}-(I|i)\s{0,1}(F|f)\s{0,1}(T|t)\s{0,1}(M|m)\s{0,1}\w{(U)(b)(e)(r)(l)(a)(n)(d)(i)(a)|| (U)(b)(e)(r)(l)(a)(n)(d)(i)(a) (C)(e)(n)(t)(r)(o)} $/;


    if (p7.test(valor7)) {
        alert("Ok")
    } else {
        alert("Invalido")
    }
}
//----------------------------------------------------//
function validar8() {
    var valor8 = document.getElementById("v8").value;
    var p8 = /^IFTM campus Uberlândia || IFTM campus Uberlândia Centro$/;

    if (p8.test(valor8)) {
        alert("Ok")
    } else {
        alert("Invalido")
    }
}
//----------------------------------------------------//
//----------------------------------------------------//
function validar9() {
    var valor9 = document.getElementById("v9").value;
    var p9 = /^\+\w{2}\(\d{2}\)\d{5}-\d{4}$/;

    if (p9.test(valor9)) {
        alert("Ok")
    } else {
        alert("Invalido")
    }
}
//----------------------------------------------------//
//----------------------------------------------------//
function validar10() {
    var valor10 = document.getElementById("v10").value;
    var p10 = /^\(\d{2,3}\)\d{5}-\d{4}$/;

    if (p10.test(valor10)) {
        alert("Ok")
    } else {
        alert("Invalido")
    }
}
//----------------------------------------------------//
//----------------------------------------------------//
function validar11() {
    var valor11 = document.getElementById("v11").value;
    var p11 = /^\d[1.3](.|,)\d[2.5]$/;

    if (p11.test(valor11)) {
        alert("Ok")
    } else {
        alert("Invalido")
    }
}
//----------------------------------------------------//
function validar12() {
    var valor12 = document.getElementById("v12").value;
    var p12 = /R\$ \d[0-999]{0,3}.\d[0-999]{0,3}.\d[0-999]{0,3}.\d[0-999]{0,3},\d[0,99]{0,2}$/;

    if (p12.test(valor12)) {
        alert("Ok")
    } else {
        alert("Invalido")
    }
}
//----------------------------------------------------//
function validar13() {
    var valor13 = document.getElementById("v13").value;
    var p13 = /^[2](?=[0-3])\d:|[0-1][0-9]:[0-5][0-9]:[0-5][0-9]s$/;

    if (p13.test(valor13)) {
        alert("Ok")
    } else {
        alert("Invalido")
    }
}
//----------------------------------------------------//
function validar14() {
    var valor14 = document.getElementById("v14").value;
    var p14 = /\d{2}\/\d{2}\/\d{2,4}$/;

    if (p14.test(valor14)) {
        alert("Ok")
    } else {
        alert("Invalido")
    }
}
//----------------------------------------------------//

