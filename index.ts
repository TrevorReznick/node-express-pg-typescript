import express, { Express, Request, Response } from 'express'
import {test} from './app/routes/index'


import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/', (req, res) => { // Welcome Mesage
  res.send('Express + TypeScript Server')
})

/* @@ import Routes @@ */
app.get('/test', test)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})






