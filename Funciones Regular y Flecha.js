let x = 4;

const funcionRegular = function (x) {
    if (x % 2 == 0){
        var res = "El número es par.";
        return res;
    } else {
        var res = "El número es impar.";
    }
}

console.log(funcionRegular(x));

const funcionFlecha = (x) => {
    if (x % 2 == 0){
        var res = "El número es par.";
        return res;
    } else {
        var res = "El número es impar.";
    }
}

console.log(funcionFlecha(x));