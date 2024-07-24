/*Modificar un Objeto declarado con const: Crea un objeto utilizando const y modifica una de sus propiedades. */
const objeto = {
    nombre : 'Juanjo',
    apellidos :'Jaén Gacía',
    edad : 19,
    } 
console.log("Antes de la modificacion", objeto)

    objeto.edad = 21;

    console.log("Despues de la propiedad", objeto)
    