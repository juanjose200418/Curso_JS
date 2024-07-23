/*Encontrar un Elemento en un Array: Escribe una función que verifique si un elemento existe en un array. */
function verificacionDeArray(elemento){
    const arrayElementos = ['Pelota','Raqueta','Movil','Peluche']
    return arrayElementos.includes(elemento)
}
const result = verificacionDeArray('Movil')
console.log (result)