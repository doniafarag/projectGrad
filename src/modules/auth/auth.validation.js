
import Joi from 'joi'



const signUpValidation = Joi.object({
     name: Joi.string().min(3).required(),
     email: Joi.string().email().required(),
     password: Joi.string().min(3).required(),
     confirmPassword:Joi.ref('password')
     
})

const signInValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
})

const forgetPasswordValidation = Joi.object({
    email: Joi.string().email().required(),
})

const CheckCodeValidation = Joi.object({
    email: Joi.string().email().required(),
    forgetCode: Joi.number().min(5).required(),
})

const RestePasswordValidation = Joi.object({
    email: Joi.string().email().required(),
    newpassword: Joi.string().min(3).required(),
    confirmPassword:Joi.ref('newpassword')
    
})

const tokenValidation ={
    token:Joi.string().required(),
}


export {
    signUpValidation,
    signInValidation,
    forgetPasswordValidation,
    CheckCodeValidation,
    RestePasswordValidation,
    tokenValidation
}
