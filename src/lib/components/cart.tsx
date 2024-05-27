import { getCart } from "../actions/actions";
import { Product } from "@/api/products/db";
import DisplayCart from "./cartDisplay";
import styles from "@/page.module.css";

const ShoppingCart = async () => {
  const cartList: Product[] = await getCart();

  const sum = cartList.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );
  return (
    <span className={styles.cart}>
      <DisplayCart sum={{ sum: sum }} />
    </span>
  );
};

export default ShoppingCart;
