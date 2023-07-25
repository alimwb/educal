import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'yup';
import { MulterError } from 'multer';
import { errorLogger, NotFoundErr, BadRequestErr, UnauthorizedErr, ForbiddenErr, ApiKeyErr } from './';

const handler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  let errors: { code: number, message: string }[] = [];
  let resObj = {
    errors,
    headers: req.headers,
    body: req.body,
    parameters: req.params,
  };

  // if the http status code of response is already set,
  // then it's specified by the developer so just push it to
  // errors array
  if (res.statusCode && res.statusCode != 200) {
    resObj.errors.push({
      code: res.statusCode,
      message: err.message,
    });
  }
  // validaion err
  else if (err instanceof ValidationError) {
    res.status(400);
    resObj.errors = err.errors.map((msg) => {
      return {
        code: res.statusCode,
        message: msg
      }
    });
  }
  // file error
  else if (err instanceof MulterError) {
    res.status(400);
    resObj.errors.push({
      code: res.statusCode,
      message: err.message,
    });
  }
  // [delimiter for better readability]
  else if (err instanceof ApiKeyErr) {
    res.status(401);
    resObj.errors.push({
      code: res.statusCode,
      message: err.message,
    });
  }
  // [delimiter for better readability]
  else if (err instanceof ForbiddenErr) {
    res.status(403);
    resObj.errors.push({
      code: res.statusCode,
      message: err.message,
    });
  }
  // [delimiter for better readability]
  else if (err instanceof NotFoundErr) {
    res.status(404);
    resObj.errors.push({
      code: res.statusCode,
      message: err.message,
    });
  }
  // [delimiter for better readability]
  else if (err instanceof UnauthorizedErr) {
    res.status(401);
    resObj.errors.push({
      code: res.statusCode,
      message: err.message,
    });
  }
  // [delimiter for better readability]
  else if (err instanceof BadRequestErr) {
    res.status(400);
    resObj.errors.push({
      code: res.statusCode,
      message: err.message,
    });
  }
  // it's a server err
  else {
    res.status(500);
    resObj.errors.push({
      code: 500,
      message: 'خطایی در سمت سرور رخ داده است',
    });
    errorLogger({ title: 'SERVER-SIDE ERROR' }, [
      {
        err,
        headers: resObj.headers,
        body: resObj.body,
        parameters: resObj.parameters,
      },
    ]);
  }

  res.json(resObj);
};

export { handler as errorHandler };
