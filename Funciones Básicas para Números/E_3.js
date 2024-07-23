//Generar un Número Aleatorio: Escribe una función que genere un número aleatorio entre un mínimo y un máximo especificados.
function numeroAleatorioEntre(minimo, maximo) {
    if (minimo < 0) {
        return "Número demasiado pequeño.";
    } else if (minimo > maximo) {
        return "El valor mínimo no puede ser mayor que el valor máximo.";
    } else if (maximo > 100) {
        return "Número demasiado grande.";
    }
   /*const numeroAleatorio = Math.random() * (maximo - minimo) + minimo;
    return numeroAleatorio;
    {*/
    const numeroEntero = Math.floor(Math.random()*(maximo - minimo) + minimo);
    return numeroEntero;
    }
//}
console.log(numeroAleatorioEntre(0, 100))
