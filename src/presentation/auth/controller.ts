import { Request, Response } from "express"

// LLAMAN AL CASO DE USO
export class AuthController {

    constructor() { }

    registerUser = ( req: Request, res: Response ) => {
        res.json('registerUser')
    }

    
    loginUser = ( req: Request, res: Response ) => {
        res.json('loginUser')
    }

}