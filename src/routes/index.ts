import { type Request, type Response } from 'express';

import express = require('express');

const router = express.Router();

router.get('/', (req:Request, res:Response) => {
  res.send({ message: 'Hello world' });
});

export default router;
