/*Crear una Clase y una Instancia: Define una clase Animal con propiedades y métodos, y crea una instancia de esta clase. */
class Animal{
    constructor (nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    describir (){
        console.log(`Este es ${this.nombre}y tiene ${this.edad} años`)
    }
}
    
    const miAnimal = new Animal('Juanjo', 12)

    miAnimal.describir();
