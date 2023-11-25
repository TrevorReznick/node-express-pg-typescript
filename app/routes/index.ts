import express from 'express'
//import { Request, Response} from 'express'
import { MainController as main} from '../controllers'

const router = express.Router()


router.get('/', main.home)
router.get('/test-db', main.getAllUsers)
router.get('/test-api', main.testApi)
router.get('/find-user/:id', main.getById)

export default router

/*
export function test(req: Request, res: Response) {
  res.send('Testing Routes')
}
*/



