import { Router } from "express";
import { getAllCourses } from "../controllers/course";

const router = Router();

router.get('/all', getAllCourses);

export { router as courseRouter };
