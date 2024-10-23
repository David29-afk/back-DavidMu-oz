import Product from "../../models/Product.js";

let createProduct = async (req, res, next) => {
    try {
        let product = req.body
        let all = await Product.create(product)
        return res.status(201).json({
            response: all,
        })
    } catch (error) {
        next(error)
    }
}

let createMultipleProducts = async (req, res, next) => {
    try {
        let products = req.body; 

// Verificar si `products` es un arreglo
if (!Array.isArray(products)) {
    return res.status(400).json({
        error: "El cuerpo de la solicitud debe ser un arreglo de objetos."
    });
}

        let all = await Product.insertMany(products); // Usar insertMany para crear varios documentos
        return res.status(201).json({
            response: all,
        });
    } catch (error) {
        next(error)
    }
}

export { createProduct, createMultipleProducts } 