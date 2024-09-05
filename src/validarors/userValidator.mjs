import Joi from 'joi';

const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(18).max(120).required(),
})

const validateUserPost = (req, res, next) => {
    const {error} = userSchema.validate(req.body)
    if (error) {
        return res.status(400).json({message: error.details[0].message})
    }
    next()
}

const validateUserPut = (req, res, next) => {
    const {error} = userSchema.validate(req.body)
    if (error) {
        return res.status(400).json({message: error.details[0].message})
    }
    next()
}

export {validateUserPost, validateUserPut}