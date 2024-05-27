"use client";

import { deleteItem } from "../actions/actions";

const BuyBtn = () => {
  const handleAction = async () => {
    const res = await deleteItem();
  };
  return <button onClick={handleAction}>Lägg beställningen</button>;
};
export default BuyBtn;
