import "dotenv/config.js"
import "../../config/database.js"
import Store from "../Store.js"

const stores = [
  { name: "Tienda A", address: "123 Calle Principal, Ciudad A", phone: 1234567890 },
  { name: "Tienda B", address: "456 Avenida Secundaria, Ciudad B", phone: 9876543210 },
  { name: "Tienda C", address: "789 Boulevard Tercero, Ciudad C", phone: 4561237890 },
  { name: "Tienda D", address: "321 Calle Cuarta, Ciudad D", phone: 3219876540 },
  { name: "Tienda E", address: "654 Avenida Quinta, Ciudad E", phone: 6543217890 }
];


Store.insertMany(stores)