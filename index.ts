import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv' 
import router from './app/routes/index'
import {MainController} from './app/controllers/index'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use('/api', router)

/* @@ test message @@ */
app.get("/", MainController.home)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})









