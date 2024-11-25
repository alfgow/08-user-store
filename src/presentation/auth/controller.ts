import { Request, Response } from "express";
import { RegisterUserDto } from "../../domain";

export class AuthController {

    controller() {}

    registerUser = (req: Request, res: Response)=>{

        const [error,registerDto] = RegisterUserDto.create(req.body)
        if(error) return res.status(400).json({error})

        res.json(registerDto);
    }

    loginUser = (req: Request, res: Response)=>{
        res.json('Login User');
    }

    validateEmail = (req: Request, res: Response)=>{
        res.json('Validate Email');
    }

}