import mongoose from "mongoose";

let url = process.env.URI_MONGO

console.log(url);


//mongoose.connect(url)
//.then(() => console.log("base de datos conectada"))
//.catch(error => console.log(error))

async function coneccionBaseDeDatos() {
    try {
        await mongoose.connect(url)
        console.log("Base de datos conectada");
        
    } catch (error) {
        console.log(error);
        
    }
}

coneccionBaseDeDatos()