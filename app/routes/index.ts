import express from 'express'

import { Request, Response} from 'express'
import { MainController } from '../controllers'

const router = express.Router()

export function test(req: Request, res: Response) {
  res.send('Testing Routes')
}

router.get('/test-db', MainController.getAll)






