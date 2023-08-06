import { Request, Response } from 'express';
import { BadRequestErr } from '../helpers/errors';

type paramsWithTypes = {
  [paramName: string]: 'string' | 'number';
};

/**
 * This middleware checks the route's parameters types to be the correct type.
 * 
 * Pass in the object with the parameters and their types, and if they don't match, there will be an error.
 * 
 * @param params An object to check the req.params against. It should include the route parameter name as key and its desired type as value.
 */

function middleware(params: paramsWithTypes) {
  return async (req: Request, res: Response) => {
    if (typeof params !== 'object') {
      throw new TypeError('params argument must be object');
    }

    for (let paramName in params) {
      const paramType = params[paramName];

      if (paramType === 'number') {
        if (!Number.isFinite(+req.params[paramName])) {
          throw new BadRequestErr('پارامتر آدرس وب معتبر نیست');
        }
      } else {
        if (typeof req.params[paramName] !== 'string') {
          throw new BadRequestErr('پارامتر آدرس وب معتبر نیست');
        }
      }
    }
  };
}

export { middleware as checkRouteParamType };
