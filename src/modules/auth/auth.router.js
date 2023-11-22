import * as auth from './auth.controller.js'

import { CheckCodeValidation, RestePasswordValidation, forgetPasswordValidation, signInValidation, signUpValidation, tokenValidation } from './auth.validation.js'
import { validate } from '../../middleware/validate.js'


const authRouter=Router()

authRouter.post('/signup',validate(signUpValidation) ,auth.signUp)
authRouter.get('/confirmEmail/:token',auth.confirmEmail)
authRouter.get('/newConfirmEmailToken/:token',auth.newConfirmEmailToken)
authRouter.post('/signin',validate(signInValidation),auth. signIn)
// authRouter.post('/forgetpassword',auth.forgetPassword)
// authRouter.post('/resetPassword/:newToken',auth.resetPassword)
authRouter.patch('/forgetPassword',validate(forgetPasswordValidation),auth.forgetPassword)
authRouter.post('/CheckCode',validate(CheckCodeValidation),auth.CheckCode)
authRouter.patch('/RestePassword',validate(RestePasswordValidation),auth.RestePassword)
  

export default authRouter


