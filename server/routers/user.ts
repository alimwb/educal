import { Router } from "express";
import { getProfile, updateProfile, logout } from "../controllers/user";

const router = Router();

router.get('/profile', getProfile);

router.put('/profile/update', updateProfile);

router.post('/logout', logout);

export { router as userRouter };
