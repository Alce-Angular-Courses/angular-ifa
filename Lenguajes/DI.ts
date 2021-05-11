class Mascota {
    constructor(
        public especie: string = '',
        public nombre: string = ''
    ) {}
}

class Persona {
    static escuela = 'Escuela Z'
    // static escuela()
    
    constructor (
        public nombre: string = '', 
        private edad: number = 0, 
        public isAlumno:boolean = false,
        public mascota: Mascota) {
        }

    saludar() {
        console.log(`Hola soy ${this.nombre}, y tengo ${this.edad} años`)
    }
}

const pr1 = new Persona('Pepe', 23, true,  new Mascota('perro', 'Rufo') )