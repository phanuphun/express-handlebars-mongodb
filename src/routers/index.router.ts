import { Router } from "express";
import authRouter from "./auh.router";

const appRouter = Router();

appRouter.use("/auth", authRouter);

export default appRouter;