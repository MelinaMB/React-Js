import MOCK_DATA from '../data/MOCK_DATA.json'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        //cuerpo de la promesa
        setTimeout(() => {
            resolve(MOCK_DATA)
            // reject("Promesa rechazada")
        }, 2000)
    })

}

export const pedirProductoPorId = (id) => {
    return new Promise((resolve, reject) => {
        //cuerpo de la promesa
        setTimeout(() => {
            resolve(MOCK_DATA.find(prod => prod.id === id))
            // reject("Promesa rechazada")
        }, 2000)
    })

}

