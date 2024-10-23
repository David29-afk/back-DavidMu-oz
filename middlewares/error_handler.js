const error_handler = (error,req, res, next) => {
    console.error("Error interno:", error);
    
    return res.status(500).json({
        sucess: false,
        response: error,
        message: "¡Oops! Ha ocurrido un error interno en el servidor. 😞",
})
}


export default error_handler