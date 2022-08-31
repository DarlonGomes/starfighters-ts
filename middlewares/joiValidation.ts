import { Request, Response, NextFunction } from "express";
import { battleSchema } from "../schemas/schemas";

export function validateUsers(req : Request, res: Response, next: NextFunction){
    let validation = battleSchema.validate(req.body);
    if(validation.error) return res.status(422).send(validation.error.message);
    next();
}