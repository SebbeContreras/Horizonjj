"use client";
import { addItem } from "../actions/actions";
import style from "../../app/page.module.css";

const AddQuantity = ({ ...item }) => {
  const handleAction = async () => {
    const res = await addItem(item);
  };

  return (
    <form action={handleAction}>
      <button className={style.small__btn} type="submit">
        +
      </button>
    </form>
  );
};
export default AddQuantity;
