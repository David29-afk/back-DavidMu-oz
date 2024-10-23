const validateArrayBody = (req, res, next) => {
    
    if (!Array.isArray(req.body)) {
        return res.status(400).json({
            success: false,
            error: "El cuerpo de la solicitud debe ser un arreglo de objetos."
        });
    }
    next(); 
};

export default validateArrayBody;