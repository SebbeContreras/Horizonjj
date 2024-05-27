"use client";

import style from "../../app/(ACADEMY)/EVENTS/page.module.css";
import { addBooking } from "../actions/actions";

const EventBtn = (user: any, userId: any) => {
  const handleAction = async () => {
    console.log("action started");
    const res = await addBooking(user.user, user.userId);
  };
  return (
    <form action={handleAction}>
      <button className={style.small__btn} type="submit">
        Boka
      </button>
    </form>
  );
};
export default EventBtn;
