import "dotenv/config.js"
import "../../config/database.js"
import Employee from "../Employee.js"

const employees = [
    { name: "Empleado 1", position: "Gerente", salary: 50000 },
    { name: "Empleado 2", position: "Desarrollador", salary: 55000 },
    { name: "Empleado 3", position: "Diseñador", salary: 48000 },
    { name: "Empleado 4", position: "Analista", salary: 47000 },
    { name: "Empleado 5", position: "Marketing", salary: 49000 },
    { name: "Empleado 6", position: "Recursos Humanos", salary: 46000 },
    { name: "Empleado 7", position: "Contador", salary: 52000 },
    { name: "Empleado 8", position: "Soporte Técnico", salary: 43000 },
    { name: "Empleado 9", position: "Administrador", salary: 44000 },
    { name: "Empleado 10", position: "Jefe de Ventas", salary: 60000 },
    { name: "Empleado 11", position: "Científico de Datos", salary: 65000 },
    { name: "Empleado 12", position: "Desarrollador Frontend", salary: 62000 },
    { name: "Empleado 13", position: "Investigador", salary: 67000 },
    { name: "Empleado 14", position: "Jefe de Proyectos", salary: 58000 },
    { name: "Empleado 15", position: "Diseñador UX/UI", salary: 54000 },
  ];
  

Employee.insertMany(employees)