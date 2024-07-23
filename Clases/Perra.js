/*Herencia de Clases: Crea una clase Perro que herede de la clase Animal y agregue propiedades y métodos adicionales. */
import { Animal } from './Animal.js';
export class Perra extends Animal{
    constructor (nombre, edad, raza){
        super(nombre, edad); // Llamamos al constructor de la clase base
        this.raza = raza;
    }
    descripcion(){
        console.log(`Mi perra se llama ${this.nombre}, tiene ${this.edad}, y es un ${this.raza}`)
    }
}
const miPerra = new Perra('Firulais', 3, 'Husky');
miPerra.descripcion();