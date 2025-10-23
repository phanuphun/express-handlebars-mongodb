import { Router } from "express";
import authController from "../controllers/auth.controller";
import upload from "../middlewares/multer";

const authRouter = Router();

authRouter.post('/login', authController.loginUser);
authRouter.post('/register', upload.single('avatar'), authController.registerUser);

export default authRouter;
