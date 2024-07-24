/*Uso de const: Declara una constante con const y demuestra que no se puede reasignar. */
const nombre = 'Juanjo'
console.log(nombre);
try{
    nombre = 'Juanjo'
}catch (error){
    console.log("Error al solicitar la constante", error.message);
}
console.log(nombre)
