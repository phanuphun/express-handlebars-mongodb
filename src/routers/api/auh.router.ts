import { Router } from "express";
import authController from "../../controllers/auth.controller";
import upload from "../../middlewares/multer";

const apiAuthRouter = Router();

apiAuthRouter.post('/login', authController.loginUser);
apiAuthRouter.post('/register', upload.single('avatar'), authController.registerUser);

export default apiAuthRouter;
