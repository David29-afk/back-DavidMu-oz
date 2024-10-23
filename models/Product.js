import { Schema,model } from "mongoose"; 

let collection = "products"
let schema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        unique: true
    },
    
},{
    timestamps: true
})

let Product = model(collection, schema);

export default Product;