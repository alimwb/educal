import { Request, Response, NextFunction } from 'express';
import { middlewareWrapperParam } from '../types/types/middlewareWrapperParam';
import { rm } from 'fs/promises';
import { errorLogger } from '../helpers/errors';

/**
 * This is a high-level middleware. It wraps the async middlewares inside a function 
 * which handles all the errors thrown from them and also ends the request if it's needed.
 * 
 * @param middleware any user-defined middleware (3rd parties may have conflicts). accepted type: {@link middlewareWrapperParam}
 * @returns a middleware to be placed in express middleware chain
 */

function middlewareWrapper(middleware: middlewareWrapperParam) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await middleware(req, res);

      if (res.headersSent) {
        res.end();
      } else {
        next();
      }
    } catch (err) {
      if (req.file) {
        rm(req.file.path).catch(
          errorLogger.bind(null, { title: 'FILE REMOVAL ERROR' })
        );
      }

      if (req.files) {
        if (Array.isArray(req.files)) {
          for (let file of req.files) {
            rm(file.path).catch(
              errorLogger.bind(null, { title: 'FILE REMOVAL ERROR' })
            );
          }
        } else {
          for (let key in req.files) {
            for (let file of req.files[key]) {
              rm(file.path).catch(
                errorLogger.bind(null, { title: 'FILE REMOVAL ERROR' })
              );
            }
          }
        }
      }

      next(err);
    }
  };
}

export { middlewareWrapper };
