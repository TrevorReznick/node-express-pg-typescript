import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv' 
import router from './app/routes/index'
import {MainController} from './app/controllers/index'
import {mail_message, email} from './app/scripts/mailer'

dotenv.config()

const app: Express = express()
const port = process.env.PORT


app.use('/api', router)

/* @@ test message @@ */
app.get("/", MainController.home)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})

//const mail = require('./app/scripts/mailer.js')
//mail.mailer()
const _email = mail_message()
// Now you can use the 'email' object here
console.log(_email)
console.log(email)










