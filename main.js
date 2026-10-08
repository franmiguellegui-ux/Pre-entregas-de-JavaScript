const nombre = prompt ("nombre del usuario")

console.log(nombre)
console.log(typeof nombre)

let Año = prompt ("fecha de nacimiento del usuario")
Año = parseInt(Año)

console.log(Año)
console.log(typeof Año)

let edad = 2026 - Año

console.log(edad)
console.log(typeof edad)

const soltero = prompt ("¿está soltero?")
console.log(soltero)
console.log(typeof soltero)

alert("Hola " + nombre + ", tu edad es de " + edad + " años, y " + soltero + " estas soltero")