// dependencies
import morgan from 'morgan';
import express from 'express';

// middlewares
export default (app) => {
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.disable('x-powered-by');
};
