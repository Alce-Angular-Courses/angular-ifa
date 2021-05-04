
// declarar
export function suma(a = 0, b = 0) {
    return a + b  
}

console.log(suma())
console.log(suma(3))
console.log(suma(3,8,9,'Pepe'))

// asignar a variables
export const resta = function (a = 0, b = 0) {
    return a-b
}

console.log(resta(6,3))

setTimeout(function () {
    console.log(resta(12,7))
}, 2000)

setTimeout( () => console.log(resta(12,7) ), 2000)

// arrow functions ES6
const prod =  (a = 1, b = 1) => {
    return a*b
}
