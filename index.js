import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import dotenv from 'dotenv'
import { bootstrap } from './src/bootstrap.js'
import cors from 'cors'

dotenv.config()
const app = express()
const port = process.env.PORT || 5000
 // Allow Access From anyWhere
app.use(express.json())

bootstrap(app)
dbConnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))