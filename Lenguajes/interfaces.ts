
interface iPerson {
    nombre: string,
    edad: number,
    isAlumno: boolean
}

class Person implements iPerson {

    constructor(
        public nombre: string = '', 
        public edad: number = 0, 
        public isAlumno:boolean = false) {}
}

const p1 = new Person()
const p2: Person = {
    nombre: '',
    edad: 0,
    isAlumno: false
}

let p3: Person
let p4: iPerson

p3 = {
    nombre: '',
    edad: 0,
    isAlumno: false
}

p4 = {
    nombre: '',
    edad: 0,
    isAlumno: false
}