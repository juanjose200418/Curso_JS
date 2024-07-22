/*Escribe una función que tome una cadena de texto como entrada y devuelva la cadena invertida.*/

function revertirCadena(texto) {
    return texto.split('').reverse().join('');
}
console.log(revertirCadena('monja'));
