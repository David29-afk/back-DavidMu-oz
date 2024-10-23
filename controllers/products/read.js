import Product from "../../models/Product.js";

let allProducts =  async (req, res, next) => {
    try {
        let all = await Product.find()
        return res.status(200).json({
            response: all,
        })
    } catch (error) {
        next(error)
}
}

let productByName =  async (req, res, next) => {
    try {
        let nameQuery = req.params.x
        let all = await Product.find({name: nameQuery})
        return res.status(200).json({
            response: all,
        })
    } catch (error) {
       next(error)
}
}

let productByCategory =  async (req, res, next) => {
    try {
        let categoryQuery = req.params.x
        let all = await Product.find({category: categoryQuery})
        return res.status(200).json({
            response: all,
        })
    } catch (error) {
        next(error)
}
}

let productByPrice =  async (req, res, next) => {
    try {
        let priceQuery = req.params.x
        let all = await Product.find({price: priceQuery})
        return res.status(200).json({
            response: all,
        })
    } catch (error) {
       next(error)
}
}

export { allProducts, productByName, productByCategory, productByPrice } 
