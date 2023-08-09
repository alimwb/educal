import { UserService } from './user.service';
import { shopCartModel } from '../../types/interfaces/models';

type cartDataType = shopCartModel & {
  courses: {
    _id: number;
    title: string;
    coverUrl: string | null;
    price: string;
  }[];
};

async function getCart(this: typeof UserService, userId: number): Promise<cartDataType | null> {
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
