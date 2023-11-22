import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.DB_OnLine).then(()=>{
        console.log('database connected successfuly')
    }).catch(()=>{
        console.log('database error')
    })
}

// mongodb+srv://user:12345@cluster0.lbdo1g8.mongodb.net/
// mongodb://127.0.0.1:27017/E-commerce
// mongodb+srv://route:route123@cluster0.lbdo1g8.mongodb.net/ecomxyz