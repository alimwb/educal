import { BadRequestErr } from '../../helpers/errors';
import { ShopCartService } from './shopCart.service';

/**
 * Removes the given course from the user's shopping cart.
 * 
 * @param userId Ther target user's id
 * @param courseId The course's id to remove from shopping cart
 */

async function removeCourseFromCart(this: typeof ShopCartService, userId: number, courseId: number) {
  const cart = await this.getCart(userId);

  if (cart === null) {
    throw new BadRequestErr('سبد خرید کاربر خالی است');
  }

  const targetCourse = cart.courses.find((course) => course._id === courseId);

  if (targetCourse === undefined) {
    throw new BadRequestErr('این دوره در سبد خرید وجود ندارد');
  }

  if (cart.courses.length === 1) {
    await this.carts.deleteOne({
      userId,
      isPaid: false,
    });
  } else {
    await this.carts.updateOne(
      { userId, isPaid: false },
      {
        $pull: { coursesIds: courseId },
        $inc: { totalPrice: -Number(targetCourse.price) },
      }
    );
  }
}

export { removeCourseFromCart };