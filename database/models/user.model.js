import  mongoose, { Schema,model } from "mongoose";
import bcrypt from 'bcrypt'


const userSchema = new Schema({
   name:{
      type:String,
       required:[true,"please Add a user Name"],
       trim:true,
       minlength:3,
   },
   firstName:{
       type:String,
       trim:true,
       minlength:3,
    },
    lastName:{
      type:String,
      trim:true,
      minlength:3,
   },
   email:{
        type:String,
        required:[true,"please Add a user Email"],
        trim:true,
        unique:true
     },
     password:{
        type:String,
        required:[true,"please Add a your password"],
        minlength: 6
     },
     passwordChangedAt:Date,
     blocked:{
        type:Boolean,
        default:false
     },
     isActive:{
        type:Boolean,
        default:true
     },
     confirmEmail:{
      type:Boolean,
      default:false
    },
     role:{
        type:String,
        enum:['user','admin'],
        default:'user'
     },
     forgetCode:{
      type:String,
      default:null
     },
     resetCode: {type:String},
     codeCreatedAt:Date,
     

},{timestamps:true})
userSchema.pre('save',function(){
   if(this.isModified('name')) {
      const [firstName,lastName]=this.name.split(' ');
   this.firstName = firstName;
   this.lastName = lastName;
   }
})

userSchema.pre('save',function(){
    this.password=bcrypt.hashSync(this.password , 8);
   console.log(this)
})

userSchema.pre('findOneAndUpdate',function(){
   if( this._update.password)  this._update.password=bcrypt.hashSync(this._update.password , 8);
  console.log(this)
})




export const userModel = model('user',userSchema)