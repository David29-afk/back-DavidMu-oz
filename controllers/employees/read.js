import Employee from "../../models/Employee.js";

let allEmployees =  async (req, res, next) => {
    try {
        let all = await Employee.find()
        return res.status(200).json({
            response: all,
        })
    } catch (error) {
        next(error)
}
}

let employeeByName =  async (req, res, next) => {
    try {
        let nameQuery = req.params.x
        let all = await Employee.find({name: nameQuery})
        return res.status(200).json({
            response: all,
        })
    } catch (error) {
       next(error)
}
}

let employeeBySalary =  async (req, res, next) => {
    try {
        let salaryQuery = req.params.x
        let all = await Employee.find({salary: salaryQuery})
        return res.status(200).json({
            response: all,
        })
    } catch (error) {
        next(error)
}
}

let employeeByPosition =  async (req, res, next) => {
    try {
        let positionQuery = req.params.x
        let all = await Employee.find({position: positionQuery})
        return res.status(200).json({
            response: all,
        })
    } catch (error) {
       next(error)
}
}


export { allEmployees, employeeByName, employeeBySalary, employeeByPosition } 