const user1 = {
    nombre: 'Pepe',
    edad: 23,
    isAlumno: true,
    saludar : function () {
        console.log(`Hola soy ${this.nombre}, y tengo ${this.edad} años`)
    }
}
console.log(user1)

function User(nombre = '', edad = 0, isAlumno = false) {
    this.nombre = nombre
    this.edad = edad
    this.isAlumno = isAlumno 
}
User.prototype.saludar = function () {
    console.log(`Hola soy ${this.nombre}, y tengo ${this.edad} años`)
}


const user2 = new User('Elena', 34, true)
const user3 = new User('Isabel', 36, true)
user2.altura = 170
console.log(user2)
console.log(user3)
user2.saludar()
user3.saludar()
user1.saludar()