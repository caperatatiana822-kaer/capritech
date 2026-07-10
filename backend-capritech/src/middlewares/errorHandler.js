const logger = require("./logger");
const errorHandler = (err, req, res, next)=>{
    logger.error({
        message: err.message,
        method: req.mothod,
        url: req.originalUrl,
        ip: req.ip,
        body: req.body,
        stack: err.stack
    });
    res.status(err.status||500).json({
        success:false,
        message: err.message || "Error interno del servidor",
        method: req.method,
        route: req.originalUrl,
        timestamp: new Date(),
        stack: process.env.NODE_ENV ==="development"
        ? err.stack
        : undefined
    });
};

module.exports = errorHandler;