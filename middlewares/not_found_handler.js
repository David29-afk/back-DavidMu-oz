const not_found_handler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: `Oops! 🚫 La petición con el método ${req.method} y la ruta ${req.url} no fue encontrada :c.`,
        suggestion: `Verifica que la URL sea correcta y asegúrate de que el recurso existe.`,
    })
}

export default not_found_handler