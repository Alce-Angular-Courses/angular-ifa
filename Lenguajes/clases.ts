
// ES6

class User {
    static escuela = 'Escuela Z'
    // static escuela()

    /* nombre: string
    private edad: number
    isAlumno:boolean
    constructor(nombre = '', edad = 0, isAlumno = false) {
        this.nombre = nombre
        this.edad = edad
        this.isAlumno = isAlumno 
    } */

    
    constructor(
        public nombre: string = '', 
        private edad: number = 0, 
        public isAlumno:boolean = false) {}

    saludar() {
        console.log(`Hola soy ${this.nombre}, y tengo ${this.edad} años`)
    }
}


class Alumno extends User {
    curso: string
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


const user2  = new User('Elena', 34, true)
const user3 = new User('Isabel', 36, true)

console.log(user2)
console.log(user3)
user2.saludar()
user3.saludar()

const al1 = new Alumno('Ernesto', 28, true, 'Angular')
// al1.altura = 178
// delete al1.edad
console.log(al1)
al1.saludar()