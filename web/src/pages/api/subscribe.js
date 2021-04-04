import { response } from 'express';

const app = require('express');


export default (req, res) => {
  return res.json({
    message: 'hello world'
  });
}

