"use client";
import { removeItem } from "../actions/actions";
import style from "../../app/page.module.css";

const SubQuantity = ({ ...item }) => {
  const handleAction = async () => {
    const res = await removeItem(item);
  };

  return (
    <form action={handleAction}>
      <button className={style.small__btn} type="submit">
        -
      </button>
    </form>
  );
};
export default SubQuantity;
