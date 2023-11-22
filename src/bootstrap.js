
import { globalError } from "./middleware/globelErrorMiddleware.js"
import authRouter from "./modules/auth/auth.router.js"
import userRouter from "./modules/user/user.routes.js"
import { AppError } from "./utils/AppError.js"
import cors from 'cors'




export const bootstrap = (app,express)=>{
    app.get('/', (req,res) => res.send('Hello World!'))
    app.use('/users',userRouter)
    app.use('/auth',authRouter)
    app.all('*',(req,res,next)=>{
        next(new AppError('not found endpoint',404))
    })
    app.use(cors({}))
    app.use(express.json())
    app.use(globalError)
}