"use client";

import { addItem } from "../actions/actions";
import styles from "../components/productCard.module.css";

const AddItemToCart = ({ ...item }) => {
  const handleAction = async () => {
    const res = await addItem(item);
  };
  return (
    <form action={handleAction} className={styles.product__form}>
      <button type="submit">Lägg i kundvagn</button>
    </form>
  );
};

export default AddItemToCart;
