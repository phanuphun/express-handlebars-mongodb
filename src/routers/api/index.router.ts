import { Router } from "express";
import apiAuthRoute from "./auh.router";
import appConfig from "../../configs/index.config";

const APP_NAME = appConfig.app.name;
const APP_DESCRIPTION = appConfig.app.description;
const VERSION = appConfig.app.version;

const apiAppRouter = Router();

apiAppRouter.get('/health', (req, res) => {
    res.send({
        name: APP_NAME,
        version: VERSION,
        message: APP_DESCRIPTION
    });
});

apiAppRouter.use("/auth", apiAuthRoute);

export default apiAppRouter;