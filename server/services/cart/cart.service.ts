import { Cart } from "../../models";
import { userHasCart, addCourseToCart, getCart, removeCourseFromCart } from '.';

class CartService {
  static carts = Cart;

  static userHasCart = userHasCart;
  static addCourseToCart = addCourseToCart;
  static getCart = getCart;
  static removeCourseFromCart = removeCourseFromCart;
}

export { CartService };
