import express, { Express, Request, Response } from 'express'
import cors = require('cors')
import dotenv from 'dotenv' 
import router from './app/routes/index'
import {MainController as main} from './app/controllers/index'
/* test emails classes */
import {__email, do_mail} from './app/scripts/mailer'

dotenv.config()

/* @@ init express @@ */
const app: Express = express()

/* @@ init cors */
const corsOptions: any = {
  origin: ''
}
if (process.env.NODE_ENV == 'production') {
  corsOptions.origin = process.env.API_URL_PROD
} else {
  corsOptions.origin = process.env.API_URL_DEV
}  
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // parse requests of content-type - application/x-www-form-urlencoded

const port = process.env.PORT

/* @@ init router @@ */
app.use('/api', router)
/* welcome message */
app.get("/", main.home)



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})

//do_mail(__email)







