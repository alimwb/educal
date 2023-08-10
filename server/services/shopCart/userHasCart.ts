import { ShopCartService } from "./shopCart.service";

/**
 * Checks if the user has any shopping cart in the database.
 * 
 * @param id The id of target user
 * @returns true if there's a cart, otherwise false
 */

async function userHasCart(this: typeof ShopCartService, id: number) {
  const cart = await this.carts.findOne({ userId: id, isPaid: false }).select('_id');

  if (cart) {
    return true;
  }
  else {
    return false;
  }
}

export { userHasCart };
