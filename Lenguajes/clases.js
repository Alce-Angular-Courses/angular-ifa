
// ES6

class User {
    // static escuela
    constructor(nombre = '', edad = 0, isAlumno = false) {
        this.nombre = nombre
        this.edad = edad
        this.isAlumno = isAlumno 
    }
    saludar() {
        console.log(`Hola soy ${this.nombre}, y tengo ${this.edad} años`)
    }
}

// User.escuela = 'Escuela Z'

class Alumno extends User {
    constructor(nombre = '', edad = 0, isAlumno = false, curso = '') {
        super(nombre, edad, isAlumno)
        this.curso = curso
    }
    saludar() {
        super.saludar()
        console.log(`Estudio ${this.curso} en ${User.escuela}`)
    }
}


/* function User(nombre = '', edad = 0, isAlumno = false) {
    this.nombre = nombre
    this.edad = edad
    this.isAlumno = isAlumno 
} */
/* User.prototype.saludar = function () {
    console.log(`Hola soy ${this.nombre}, y tengo ${this.edad} años`)
} */


const user2 = new User('Elena', 34, true)
const user3 = new User('Isabel', 36, true)
user2.altura = 170
console.log(user2)
console.log(user3)
user2.saludar()
user3.saludar()

const al1 = new Alumno('Ernesto', 28, true, 'Angular')
delete al1.edad
console.log(al1)
al1.saludar()