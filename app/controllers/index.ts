import { Model } from '../models/index'

interface Request {
    params: {
        id: string
    }
}

interface Response {
    send: (body: any) => void
    status: (code: number) => Response; 
}

export class MainController {

    static async getAll(req: Request, res: Response) {
        try {
            const users = await Model.test()
            res.send(users)
        } catch (err) {
            res.status(500).send(err)
        }
    }
}


  /*async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);  
      const user = await UserModel.getById(id);
      res.send(user);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  */



/*
export const main = {

    test: async (req: any, res: any) => {

        try {  
            const nome = req.query.nome
            const cognome = req.query.cognome
            const email = req.query.email
            const data = await Model.test()    
            res.send(data)    
        } catch (err) {
            res.status(500).send(err);
        }

    }
}
*/

