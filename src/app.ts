import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import appConfig from './configs/index.config';
import appRouter from './routers/api/index.router';
import * as path from 'path';
import { engine } from 'express-handlebars';
import webRouter from './routers/web/index.web.router';
import hbsEngineConfigOptions from './configs/hbs.config';

const app = express();

const APP_PREFIX = appConfig.app.prefix || '/api';

const isProd = process.env.NODE_ENV === "production";
const viewsPath = isProd
    ? path.resolve(__dirname, "views")
    : path.resolve("src", "views");

function createApp(): express.Express {
    app.set('views', viewsPath);
    app.set('view engine', 'hbs');
    app.engine('hbs', engine(hbsEngineConfigOptions));

    // Middlewares
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('public'));

    app.use(morgan('short'));
    app.use(cors());
    app.use(helmet());


    // API Router
    app.use(APP_PREFIX, appRouter);
    app.use("/", webRouter);
    console.log('=============================================');
    return app;
}

export default createApp;