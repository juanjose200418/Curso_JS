function contarVocales(texto) {
    // Convierto el texto a minúsculas para hacer la búsqueda insensible a mayúsculas
    //texto = texto.toLowerCase();
    
    // expresión para encontrar todas las vocales
    const coincidencias = texto.match(/[aeiou]/g);
    
    // Devuelve el número de coincidencias, o 0 si no hay ninguna
    return coincidencias ? coincidencias.length : 0;
}

console.log(contarVocales("HOlA jajajajajajjajaja eiou")); 
