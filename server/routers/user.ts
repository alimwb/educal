import { Router } from "express";
import { getProfile, updateProfile } from "../controllers/user";

const router = Router();

router.get('/profile', getProfile);

router.put('/profile/update', updateProfile);

export { router as userRouter };
