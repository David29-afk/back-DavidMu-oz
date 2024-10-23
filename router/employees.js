import { Router } from "express";
import {allEmployees, employeeByName, employeeBySalary, employeeByPosition } from "../controllers/employees/read.js";
import { createEmployee, createMultipleEmployees } from "../controllers/employees/create.js";

const router = Router()

router.get('/all', allEmployees )
router.get('/name/:x', employeeByName )
router.get('/salary/:x', employeeBySalary )
router.get('/position/:x', employeeByPosition )
router.post('/create/single', createEmployee)
router.post('/create/multiple', createMultipleEmployees)

export default router