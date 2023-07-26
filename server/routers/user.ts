import { Router } from "express";
import { getProfile } from "../controllers/user";

const router = Router();

router.get('/profile', getProfile);

export { router as userRouter };
