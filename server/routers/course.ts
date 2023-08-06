import { Router } from "express";
import { getAllCourses, getAllCetegories, getCourse } from "../controllers/course";

const router = Router();

router.get('/all', getAllCourses);

router.get('/categoriesList', getAllCetegories);

router.get('/:id', getCourse);

export { router as courseRouter };
