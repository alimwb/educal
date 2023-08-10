import { Router } from "express";
import { addCourseToCart, getCart, removeCourseFromCart } from "../controllers/shopCart";

const router = Router();

router.put('/add/:courseId', addCourseToCart);

router.delete('/remove/:courseId', removeCourseFromCart);

router.get('/', getCart);

export { router as shopCartRouter };
