/*Eliminar el Primer Elemento de un Array: Escribe una función que elimine el primer elemento de un array. */
function employes() {
    const arrayEmployes = ['Juanjo', 'Silvio','Angel'];
    arrayEmployes.shift([0]);
    return arrayEmployes;
}
const result = employes()

console.log(result)