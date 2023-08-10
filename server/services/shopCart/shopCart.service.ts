import { ShopCart } from "../../models";
import { userHasCart, addCourseToCart, getCart, removeCourseFromCart } from './';

class ShopCartService {
  static carts = ShopCart;

  static userHasCart = userHasCart;
  static addCourseToCart = addCourseToCart;
  static getCart = getCart;
  static removeCourseFromCart = removeCourseFromCart;
}

export { ShopCartService };
