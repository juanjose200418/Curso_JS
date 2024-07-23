
const miConstante = 42;

console.log(miConstante); 

try {
    miConstante = 100; // Esto debería causar un error
} catch (error) {
    console.log("Error al intentar reasignar la constante:", error.message);
}

console.log(miConstante); 
