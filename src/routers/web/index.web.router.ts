import { Router } from "express";
import webAuthRouter from "./auth.web.router";

const webRouter = Router();

webRouter.get("/", (req, res) => {
    return res.render("home", { title: "Home" });
});

webRouter.use("/", webAuthRouter); 

export default webRouter;