import { Router } from "express";
import {allProducts, productByCategory, productByPrice, productByName } from "../controllers/products/read.js";
import { createProduct, createMultipleProducts } from "../controllers/products/create.js";

const router = Router()

router.get('/all', allProducts )
router.get('/name/:x', productByName )
router.get('/category/:x', productByCategory )
router.get('/price/:x', productByPrice )
router.post('/create/single', createProduct )
router.post('/create/multiple', createMultipleProducts )

export default router