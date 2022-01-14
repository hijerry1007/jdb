const successRes = (res, data, statusCode = 200) => {
    res.status(statusCode).json({
        success: true,
        data
    });
};

const errorRes = (res, error = {}, statusCode = 500) => {
    res.status(statusCode).json({
      success: false,
      error: {
        statusCode,
        ...error,
      }
    });
};

module.exports = {successRes, errorRes};