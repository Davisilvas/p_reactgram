const {validationResult} = require("express-validator")

const validate = (req, res, next) => {
    const errors = validationResult(req)

    if(errors.isEmpty()){
        return next();
    }

    const extrectedErrors = []

    errors.array().map((err) => extrectedErrors.push(err.msg))

    return res.status(422).json({
        errors: extrectedErrors
    })
}

module.exports = validate