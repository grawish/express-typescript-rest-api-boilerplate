// Needed to wrap async routes in express to handle errors properly
// https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
import { type NextFunction, type Request, type Response } from 'express';
import { type ParamsDictionary } from 'express-serve-static-core';
import { type ParsedQs } from 'qs';

const asyncMiddleware = (fn: (arg0: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, arg1: Response<any, Record<string, any>>, arg2: NextFunction) => any) => async (req:Request, res:Response, next:NextFunction) =>
  await Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncMiddleware;
