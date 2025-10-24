import { ConfigOptions } from "express-handlebars/types";
import * as path from "path";
import hbsHelpers from "../utils/hbs";

const layoutsDir = path.join(__dirname, "..", "views", "layouts");
const partialsDir = path.join(__dirname, "..", "views", "partials");

const hbsEngineConfigOptions: ConfigOptions = {
    extname: '.hbs',
    layoutsDir: layoutsDir,
    partialsDir: partialsDir,
    defaultLayout: 'main',
    helpers: hbsHelpers,
    runtimeOptions: {
        allowProtoPropertiesByDefault: false,
        allowProtoMethodsByDefault: false
    }
};

export default hbsEngineConfigOptions;