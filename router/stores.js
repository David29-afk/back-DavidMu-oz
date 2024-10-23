import { Router } from "express";
import {allStores, storeByName, storeByAddress } from "../controllers/stores/read.js";
import { create, createMultiple } from "../controllers/stores/create.js";


const router = Router()

router.get('/all', allStores )
router.get('/name/:x', storeByName )
router.get('/address/:x', storeByAddress )
router.post('/create/single', create )
router.post('/create/multiple', createMultiple )

export default router