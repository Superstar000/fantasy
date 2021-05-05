import express from 'express';
// import {json, urlencoded} from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import jwt from '../middleware/jwt.middleware.js';
import routes from '../route/index.js';
import pkg from 'body-parser';
const {json, urlencoded} = pkg;


const app = express();
app.use(json());
app.use(urlencoded({extended: true}));
app.use(helmet());
app.use(cors());
app.use('/api',jwt(), routes);

export default app;
