
import { globalError } from "./middleware/globelErrorMiddleware.js"
import authRouter from "./modules/auth/auth.router.js"
import userRouter from "./modules/user/user.routes.js"
import { AppError } from "./utils/AppError.js"



export const bootstrap = (app)=>{
    app.get('/', (req,res) => res.send('Hello World!'))
    app.use('/api/v1/users',userRouter)
    app.use('/api/v1/auth',authRouter)
    app.all('*',(req,res,next)=>{
        next(new AppError('not found endpoint',404))
    })

    app.use(globalError)
}