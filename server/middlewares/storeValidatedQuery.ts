import { Request, Response } from "express";

/**
 * This middleware validates the request query againt a given validator.
 * The validated body is stored at `res.locals.validBody` and the original
 * request body is left untouched for further actions.
 * 
 * @param validator the input validator
 * @returns an async middleware to do the validation of `req.query`
 */

function middleware(validator: any) {
  return async (req: Request, res: Response) => {
    let validatedQuery = await validator.validateAsync(req.query);
    res.locals.validQuery = validatedQuery;
  }
}

export { middleware as storeValidatedQuery };
