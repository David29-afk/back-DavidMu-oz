import Employee from "../../models/Employee.js";


let createEmployee = async (req, res, next) => {
    try {
        let employee = req.body
        let all = await Employee.create(employee)
        return res.status(201).json({
            response: all,
        })
        
    } catch (error) {
        next(error)
    }
}

let createMultipleEmployees = async (req, res, next) => {
    try {
        let employees = req.body; 

// Verificar si `employees` es un arreglo
if (!Array.isArray(employees)) {
    return res.status(400).json({
        error: "El cuerpo de la solicitud debe ser un arreglo de objetos."
    });
}

        let all = await Employee.insertMany(employees); // Usar insertMany para crear varios documentos
        return res.status(201).json({
            response: all,
        });
    } catch (error) {
        next(error)
    }
}

export {createEmployee,createMultipleEmployees}