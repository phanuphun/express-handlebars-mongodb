import createApp from "./app";
import appConfig from "./configs/index.config";
import mongoDbConnect from "./configs/database,config";

const app = createApp();
const PORT = appConfig.app.port;
const HOST = appConfig.app.host;
const APP_NAME = appConfig.app.name;
const APP_DESCRIPTION = appConfig.app.description;
const VERSION = appConfig.app.version;

app.listen(PORT, HOST, async () => {
    console.log(`Application Name: ${APP_NAME}`);
    console.log(`Description: ${APP_DESCRIPTION}`);
    console.log(`Version: ${VERSION}`);
    console.log(await mongoDbConnect);
    console.log(`Server is running at http://${HOST}:${PORT}`);
    console.log('=============================================');
});