import { CartService } from './cart.service';
import { cartModel } from '../../types/interfaces/models';

type cartDataType = cartModel & {
  courses: {
    _id: number;
    title: string;
    coverUrl: string | null;
    price: string;
  }[];
};

/**
 * This method returns the shopping cart record of the user, if there's any.
 * 
 * The courses are populated into `courses` field.
 * 
 * @param userId The target user id.
 * @returns refer to {@link cartDataType}
 */

async function getCart(this: typeof CartService, userId: number): Promise<cartDataType | null> {
  const cart = await this.carts.aggregate([
    { $match: { userId, isPaid: false } },
    {
      $lookup: {
        from: 'courses',
        localField: 'coursesIds',
        foreignField: '_id',
        as: 'courses',
        pipeline: [
          {
            $project: {
              _id: true,
              title: true,
              coverUrl: true,
              price: true,
            },
          },
          {
            $addFields: {
              price: { $toString: '$price' },
            },
          }
        ],
      },
    },
    {
      $addFields: {
        totalPrice: { $toString: '$totalPrice' },
      },
    },
    {
      $project: {
        __v: false,
      },
    },
  ]);

  return cart[0] ?? null;
}

export { getCart };
