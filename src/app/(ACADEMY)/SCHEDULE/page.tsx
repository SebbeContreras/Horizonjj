import ScheduleComponent from "../../../lib/components/Schedule";
import styles from "../SCHEDULE/page.module.css";

export default function Schedule() {
  return (
    <>
      <h1 className={styles.title}>Schema</h1>
      <ScheduleComponent />
      <p className={styles.para}>
        <b>OBS!</b> endast svart och vit gi tillåtna.
      </p>
    </>
  );
}
