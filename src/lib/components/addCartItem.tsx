import { CartModel, ProductProps } from "@/api/products/db";

const AddCartItem: React.FC<CartModel> = ({ name, price, img }) => {
  const item = { name: name, price: price, img: img };
  const addItem = () => {
    let shoppingCart;
    shoppingCart = localStorage.setItem("cart", JSON.stringify(item));
  };
  return <button onClick={addItem}>BUY</button>;
};

export default AddCartItem;
