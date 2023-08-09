import { Router } from 'express';
import {
  getProfile,
  updateProfile,
  logout,
  uploadAvatar,
  removeAvatar,
  addCourseToCart,
  getCart,
  removeCourseFromCart,
} from '../controllers/user';

const router = Router();

router.get('/profile', getProfile);

router.put('/profile/update', updateProfile);

router.put('/profile/avatar/upload', uploadAvatar);

router.delete('/profile/avatar/remove', removeAvatar);

router.put('/cart/add/:courseId', addCourseToCart);

router.delete('/cart/remove/:courseId', removeCourseFromCart);

router.get('/cart', getCart);

router.post('/logout', logout);

export { router as userRouter };
