import { UserService } from './user.service';
import { CourseService } from '../course/course.service';

/**
 * Adds a course to the user's cart. If the course doesn't exist, a NotFoundErr will be thrown.
 * 
 * If there isn't a shopping cart for user, a new one will be created.
 * 
 * @param userId The id of target user.
 * @param courseId The id of target course.
 */

async function addCourseToCart(this: typeof UserService, userId: number, courseId: number) {
  const course = await CourseService.getCourseById(courseId);
  const userHasCart = await this.userHasCart(userId);

  if (userHasCart) {
    await this.carts.updateOne(
      { userId, isPaid: false },
      {
        $push: { coursesIds: courseId },
        $inc: { totalPrice: +course.price },
      }
    );
  } else {
    await this.carts.create({
      _id: 0,
      userId,
      coursesIds: [courseId],
      totalPrice: +course.price,
    });
  }
}

export { addCourseToCart };
