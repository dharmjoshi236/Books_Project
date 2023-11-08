const response = (res,statusCode, api_status, message, data = {}) => {
    return res.status(statusCode).json({
        message: message,
        status: api_status,
        data: data
    })
}

module.exports = response