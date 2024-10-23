import Store from "../../models/Store.js";

let create = async (req, res, next) => {
    try {
        let store = req.body
        let all = await Store.create (store)
        return res.status(201).json({
            response: all,
        })
    } catch (error) {
        next(error)
    }
}

let createMultiple = async (req, res, next) => {
    try {
        let stores = req.body; 

// Verificar si `stores` es un arreglo
if (!Array.isArray(stores)) {
    return res.status(400).json({
        error: "El cuerpo de la solicitud debe ser un arreglo de objetos."
    });
}

        let all = await Store.insertMany(stores); // Usar insertMany para crear varios documentos
        return res.status(201).json({
            response: all,
        });
    } catch (error) {
       next(error)
    }
}


export {create, createMultiple} 