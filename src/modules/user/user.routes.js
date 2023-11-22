import express from 'express'
import * as user from './user.controller.js'


const userRouter=express.Router()

userRouter.route('/')
   .post( user.addUser)
   .get(user.getAllUsers)
userRouter.route('/:id')
   .put(user.updateUser)
   .delete(user.deleteUser)
   .get(user.getUser)
   .patch(user.changeUserPassword)

export default userRouter


