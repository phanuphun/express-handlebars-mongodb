import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import appConfig from './configs/index.config';
import appRouter from './routers/index.router';
import * as path from 'path';
import { uploadDir } from './middlewares/multer';

const app = express();
console.log('Current Directory:', __dirname);
console.log('Upload Directory:', uploadDir);

const APP_PREFIX = appConfig.app.prefix || '/api';

function createApp(): express.Express {
    app.use(morgan('short'))
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('public'));
    app.use(APP_PREFIX, appRouter);
    console.log('=============================================');
    return app;
}

export default createApp;