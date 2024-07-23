/*Calcular el Factorial: Escribe una función que calcule el factorial de un número dado.*/
function factorial(numero) {
    
    if (numero < 0) {
        return -1; 
    }

    if (numero === 0) {
        return 1
    }
    let resultado = 1
   
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(20))