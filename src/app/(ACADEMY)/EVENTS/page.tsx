import { getServerSession } from "next-auth";
import { getData } from "../../../lib/actions/actions";
import EventBtn from "../../../lib/components/eventbtn";
import { EventDoc } from "../../../lib/models/eventModel";
import styles from "../page.module.css";

const Events = async () => {
  const session = await getServerSession();

  const data = await getData();
  return (
    <main className={styles.academy__main}>
      <section className={styles.event__wrapper}>
        {data.map((e: EventDoc) => {
          return (
            <span className={styles.event__card}>
              <h3>{e.name}</h3>
              <h4>{e.date}</h4>
              <h5>{e.price} kr</h5>
              <EventBtn user={session?.user?.email} userId={e._id} />
            </span>
          );
        })}
      </section>
    </main>
  );
};
export default Events;
