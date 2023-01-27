import { type NextFunction, type Request, type Response } from 'express';
import express = require('express');
import createError = require('http-errors');
import cookieParser = require('cookie-parser');
import logger = require('morgan');
import helmet = require('helmet');
import indexRouter from './routes/index';


import errorHandler from './middleware/errorHandler';

const app = express();

app.use(helmet()); // https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError.NotFound());
});

// pass any unhandled errors to the error handler
app.use(errorHandler);

module.exports = app;
