
import { AppError } from '../../utils/AppError.js'
import { catchError } from '../../utils/catchError.js'
import { ApiFeatures } from '../../utils/ApiFeatures.js'
import { userModel } from '../../../database/models/user.model.js'



const addUser = catchError(async (req,res,next)=>{
    const User = new userModel(req.body)
    await User.save()
    res.status(201).json({message: 'success',User})
})

const getAllUsers = catchError(async (req,res,next)=>{
    let apiFeatures = new ApiFeatures( userModel.find(), req.query)
    .paginate().fields().filter().sort().search()
  // execute query
  const  Users = await apiFeatures.mongooseQuery
  res.status(201).json({message: 'success',page:apiFeatures.page , Users})
})

const updateUser = catchError( async (req,res,next)=>{
    const User = await userModel.findByIdAndUpdate(req.params.id , req.body,{new:true})
    User && res.status(201).json({message: 'success',User})
    !User && next(new AppError('User not found',404))
})

const changeUserPassword = catchError( async (req,res,next)=>{
    const User = await userModel.findByIdAndUpdate(req.params.id ,{password:req.body.password,passwordChangedAt:Date.now()},{new:true})
    User && res.status(201).json({message: 'success',User})
    !User && next(new AppError('User not found',404))
})

const getUser = catchError(async (req,res,next)=>{
    const Users = await userModel.findById(req.params.id)
    res.status(201).json({message: 'success',Users})
})


const deleteUser =catchError(async (req,res,next)=>{
    const document = await userModel.findByIdAndDelete(req.params.id)
    !document && next(new AppError(`user not found`,404))
    document && res.status(201).json({message: 'success',document})
})



export{
    addUser,
    getAllUsers,
    deleteUser,
    updateUser,
    getUser,
    changeUserPassword
}


