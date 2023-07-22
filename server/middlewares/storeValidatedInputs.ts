import { Request, Response } from "express";
import { ObjectSchema } from 'joi';

function middleware(validator: ObjectSchema) {
  return async (req: Request, res: Response) => {
    let validatedBody = await validator.validateAsync(req.body);
    res.locals.validBody = validatedBody;
  }
}

export { middleware as storeValidatedInputs };
