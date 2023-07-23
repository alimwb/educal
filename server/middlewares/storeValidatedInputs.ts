import { Request, Response } from "express";
import { ObjectSchema } from 'yup';
import { validInputs } from "../types/types";

/**
 * This middleware validates the request body againt a given validator.
 * The validated body is stored at `res.locals.validBody` and the original
 * request body is left untouched for further actions.
 * 
 * @param validator the input validator
 * @returns an async middleware to do the validation of `req.query`
 */


function middleware(validator: ObjectSchema<validInputs>) {
  return async (req: Request, res: Response) => {
    let validatedBody = await validator.validate(req.body);
    res.locals.validBody = validatedBody;
  }
}

export { middleware as storeValidatedInputs };
