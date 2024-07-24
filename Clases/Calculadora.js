/*Métodos Estáticos: Define un método estático en una clase Calculadora que realice una operación matemática y 
utilízalo sin instanciar la clase.*/
class Calculadora{
    static sumar(a,b){
        return a+b;
    }
    static restar(a,b){
        return a-b;
    }
    static multiplicar(a,b){
        return a*b;
    }
    static dividir(a,b){
        return a/b;
    }
}
const resultadoSuma = Calculadora.sumar(12,4)
const resultadoRestar = Calculadora.restar(12,4)
const resultadoMultiplicar = Calculadora.multiplicar(12,4)
const resultadoDividir = Calculadora.dividir(12,4)

console.log('Resultado de la suma:', resultadoSuma);
console.log('Resultado de la resta:', resultadoRestar);
console.log('Resultado de la multiplicación:', resultadoMultiplicar);
console.log('Resultado de la división:', resultadoDividir);
