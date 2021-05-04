// Promesa ES6

function hacerAlgoAsinc (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const n = Math.random()
            if (n > 0.5) {
                resolve(`Acierto número ${n}`)
            } else {
                reject(new Error(`Error número ${n}`))
            }
        }, time)
    })
}

/* hacerAlgoAsinc(2000)
.then( resp =>  console.log(resp))
.catch( error =>  console.log(error.message)); */


// ES8 async/await

(async () => {

    for (let i = 0; i < 5; i++) {
        try {
            const resp = await hacerAlgoAsinc(1000)
            console.log(resp)        
        } catch (error) {
            console.log(error.message)
        }        
    }
})()

