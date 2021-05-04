{
  const nombreUsuario = 'Pepe'  
  // nombreUsuario = 'Jose' // error
  // console.log('Hola ' + nombreUsuario) + ', como estas'

  // Template string
  console.log(`
    Hola ${nombreUsuario}, 
    como estas`)
}

const user = {
    nombre: 'Pepe',
    edad: 23,
    isAlumno: true,
    cursos: ['Angular', 'Vue']
}

user.nombre = 'Jose'
console.log(user)