import "dotenv/config.js"
import "../../config/database.js"
import Product from "../Product.js"

const products = [
    { name: "Producto 1", brand: "Marca A", category: "Tipo 1", price: 10.00 },
    { name: "Producto 2", brand: "Marca B", category: "Tipo 2", price: 15.00 },
    { name: "Producto 3", brand: "Marca C", category: "Tipo 3", price: 20.00 },
    { name: "Producto 4", brand: "Marca D", category: "Tipo 4", price: 25.00 },
    { name: "Producto 5", brand: "Marca E", category: "Tipo 5", price: 30.00 },
    { name: "Producto 6", brand: "Marca F", category: "Tipo 6", price: 35.00 },
    { name: "Producto 7", brand: "Marca G", category: "Tipo 7", price: 40.00 },
    { name: "Producto 8", brand: "Marca H", category: "Tipo 8", price: 45.00 },
    { name: "Producto 9", brand: "Marca I", category: "Tipo 9", price: 50.00 },
    { name: "Producto 10", brand: "Marca J", category: "Tipo 10", price: 55.00 },
    { name: "Producto 11", brand: "Marca K", category: "Tipo 11", price: 60.00 },
    { name: "Producto 12", brand: "Marca L", category: "Tipo 12", price: 65.00 },
    { name: "Producto 13", brand: "Marca M", category: "Tipo 13", price: 70.00 },
    { name: "Producto 14", brand: "Marca N", category: "Tipo 14", price: 75.00 },
    { name: "Producto 15", brand: "Marca O", category: "Tipo 15", price: 80.00 },
    { name: "Producto 16", brand: "Marca P", category: "Tipo 16", price: 85.00 },
    { name: "Producto 17", brand: "Marca Q", category: "Tipo 17", price: 90.00 },
    { name: "Producto 18", brand: "Marca R", category: "Tipo 18", price: 95.00 },
    { name: "Producto 19", brand: "Marca S", category: "Tipo 19", price: 100.00 },
    { name: "Producto 20", brand: "Marca T", category: "Tipo 20", price: 105.00 },
    { name: "Producto 21", brand: "Marca U", category: "Tipo 21", price: 110.00 },
    { name: "Producto 22", brand: "Marca V", category: "Tipo 22", price: 115.00 },
    { name: "Producto 23", brand: "Marca W", category: "Tipo 23", price: 120.00 },
    { name: "Producto 24", brand: "Marca X", category: "Tipo 24", price: 125.00 },
    { name: "Producto 25", brand: "Marca Y", category: "Tipo 25", price: 130.00 },
    { name: "Producto 26", brand: "Marca Z", category: "Tipo 26", price: 135.00 },
    { name: "Producto 27", brand: "Marca AA", category: "Tipo 27", price: 140.00 },
    { name: "Producto 28", brand: "Marca AB", category: "Tipo 28", price: 145.00 },
    { name: "Producto 29", brand: "Marca AC", category: "Tipo 29", price: 150.00 },
    { name: "Producto 30", brand: "Marca AD", category: "Tipo 30", price: 155.00 },
    { name: "Producto 31", brand: "Marca AE", category: "Tipo 31", price: 160.00 },
    { name: "Producto 32", brand: "Marca AF", category: "Tipo 32", price: 165.00 },
    { name: "Producto 33", brand: "Marca AG", category: "Tipo 33", price: 170.00 },
    { name: "Producto 34", brand: "Marca AH", category: "Tipo 34", price: 175.00 },
    { name: "Producto 35", brand: "Marca AI", category: "Tipo 35", price: 180.00 },
    { name: "Producto 36", brand: "Marca AJ", category: "Tipo 36", price: 185.00 },
    { name: "Producto 37", brand: "Marca AK", category: "Tipo 37", price: 190.00 },
    { name: "Producto 38", brand: "Marca AL", category: "Tipo 38", price: 195.00 },
    { name: "Producto 39", brand: "Marca AM", category: "Tipo 39", price: 200.00 },
    { name: "Producto 40", brand: "Marca AN", category: "Tipo 40", price: 205.00 },
    { name: "Producto 41", brand: "Marca AO", category: "Tipo 41", price: 210.00 },
    { name: "Producto 42", brand: "Marca AP", category: "Tipo 42", price: 215.00 },
    { name: "Producto 43", brand: "Marca AQ", category: "Tipo 43", price: 220.00 },
    { name: "Producto 44", brand: "Marca AR", category: "Tipo 44", price: 225.00 },
    { name: "Producto 45", brand: "Marca AS", category: "Tipo 45", price: 230.00 },
    { name: "Producto 46", brand: "Marca AT", category: "Tipo 46", price: 235.00 },
    { name: "Producto 47", brand: "Marca AU", category: "Tipo 47", price: 240.00 },
    { name: "Producto 48", brand: "Marca AV", category: "Tipo 48", price: 245.00 },
    { name: "Producto 49", brand: "Marca AW", category: "Tipo 49", price: 250.00 },
    { name: "Producto 50", brand: "Marca AX", category: "Tipo 50", price: 255.00 },
    { name: "Producto 51", brand: "Marca AY", category: "Tipo 51", price: 260.00 },
    { name: "Producto 52", brand: "Marca AZ", category: "Tipo 52", price: 265.00 },
    { name: "Producto 53", brand: "Marca BA", category: "Tipo 53", price: 270.00 },
    { name: "Producto 54", brand: "Marca BB", category: "Tipo 54", price: 275.00 },
    { name: "Producto 55", brand: "Marca BC", category: "Tipo 55", price: 280.00 },
    { name: "Producto 56", brand: "Marca BD", category: "Tipo 56", price: 285.00 },
    { name: "Producto 57", brand: "Marca BE", category: "Tipo 57", price: 290.00 },
    { name: "Producto 58", brand: "Marca BF", category: "Tipo 58", price: 295.00 },
    { name: "Producto 59", brand: "Marca BG", category: "Tipo 59", price: 300.00 },
    { name: "Producto 60", brand: "Marca BH", category: "Tipo 60", price: 305.00 },
    { name: "Producto 61", brand: "Marca BI", category: "Tipo 61", price: 310.00 },
    { name: "Producto 62", brand: "Marca BJ", category: "Tipo 62", price: 315.00 },
    { name: "Producto 63", brand: "Marca BK", category: "Tipo 63", price: 320.00 },
    { name: "Producto 64", brand: "Marca BL", category: "Tipo 64", price: 325.00 },
    { name: "Producto 65", brand: "Marca BM", category: "Tipo 65", price: 330.00 },
    { name: "Producto 66", brand: "Marca BN", category: "Tipo 66", price: 335.00 },
    { name: "Producto 67", brand: "Marca BO", category: "Tipo 67", price: 340.00 },
    { name: "Producto 68", brand: "Marca BP", category: "Tipo 68", price: 345.00 },
    { name: "Producto 69", brand: "Marca BQ", category: "Tipo 69", price: 350.00 },
    { name: "Producto 70", brand: "Marca BR", category: "Tipo 70", price: 355.00 },
    { name: "Producto 71", brand: "Marca BS", category: "Tipo 71", price: 360.00 },
    { name: "Producto 72", brand: "Marca BT", category: "Tipo 72", price: 365.00 },
    { name: "Producto 73", brand: "Marca BU", category: "Tipo 73", price: 370.00 },
    { name: "Producto 74", brand: "Marca BV", category: "Tipo 74", price: 375.00 },
    { name: "Producto 75", brand: "Marca BW", category: "Tipo 75", price: 380.00 },
    { name: "Producto 76", brand: "Marca BX", category: "Tipo 76", price: 385.00 },
    { name: "Producto 77", brand: "Marca BY", category: "Tipo 77", price: 390.00 },
    { name: "Producto 78", brand: "Marca BZ", category: "Tipo 78", price: 395.00 },
    { name: "Producto 79", brand: "Marca CA", category: "Tipo 79", price: 400.00 },
    { name: "Producto 80", brand: "Marca CB", category: "Tipo 80", price: 405.00 },
    { name: "Producto 81", brand: "Marca CC", category: "Tipo 81", price: 410.00 },
    { name: "Producto 82", brand: "Marca CD", category: "Tipo 82", price: 415.00 },
    { name: "Producto 83", brand: "Marca CE", category: "Tipo 83", price: 420.00 },
    { name: "Producto 84", brand: "Marca CF", category: "Tipo 84", price: 425.00 },
    { name: "Producto 85", brand: "Marca CG", category: "Tipo 85", price: 430.00 },
    { name: "Producto 86", brand: "Marca CH", category: "Tipo 86", price: 435.00 },
    { name: "Producto 87", brand: "Marca CI", category: "Tipo 87", price: 440.00 },
    { name: "Producto 88", brand: "Marca CJ", category: "Tipo 88", price: 445.00 },
    { name: "Producto 89", brand: "Marca CK", category: "Tipo 89", price: 450.00 },
    { name: "Producto 90", brand: "Marca CL", category: "Tipo 90", price: 455.00 },
    { name: "Producto 91", brand: "Marca CM", category: "Tipo 91", price: 460.00 },
    { name: "Producto 92", brand: "Marca CN", category: "Tipo 92", price: 465.00 },
    { name: "Producto 93", brand: "Marca CO", category: "Tipo 93", price: 470.00 },
    { name: "Producto 94", brand: "Marca CP", category: "Tipo 94", price: 475.00 },
    { name: "Producto 95", brand: "Marca CQ", category: "Tipo 95", price: 480.00 },
    { name: "Producto 96", brand: "Marca CR", category: "Tipo 96", price: 485.00 },
    { name: "Producto 97", brand: "Marca CS", category: "Tipo 97", price: 490.00 },
    { name: "Producto 98", brand: "Marca CT", category: "Tipo 98", price: 495.00 },
    { name: "Producto 99", brand: "Marca CU", category: "Tipo 99", price: 500.00 },
    { name: "Producto 100", brand: "Marca CV", category: "Tipo 100", price: 505.00 },
  ];
  

  Product.insertMany(products)