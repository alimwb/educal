import { Router } from "express";
import { getAllCourses, getAllCetegories } from "../controllers/course";

const router = Router();

router.get('/all', getAllCourses);

router.get('/categoriesList', getAllCetegories);

export { router as courseRouter };
