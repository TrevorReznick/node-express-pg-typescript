import express from 'express'
import { Request, Response} from 'express'
import { MainController } from '../controllers'

const router = express.Router()

router.get('/', MainController.home)
router.get('/test-db', MainController.getAll)
router.get('/test-api', MainController.testApi)

export default router

/*
export function test(req: Request, res: Response) {
  res.send('Testing Routes')
}
*/



