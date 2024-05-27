import styles from "../components/schedule.module.css";

const ScheduleComponent = () => {
  return (
    <>
      <section className={styles.schedule}>
        <span className={styles.schedule__day}>
          <span className={styles.schedule__title}>Måndag</span>
          <span className={styles.schedule__training}>10:00 - 10:55</span>
          <span className={styles.schedule__training}>18:00 - 18:55</span>
          <span className={styles.schedule__training}>19:00 - 19:55</span>
        </span>
        <span className={styles.schedule__day}>
          <span className={styles.schedule__title}>Tisdag</span>
          <span className={styles.schedule__training}>07:00 - 07:55</span>
          <span className={styles.schedule__training}>12:00 - 12:55</span>
          <span className={styles.schedule__training}>16:00 - 16:55</span>
          <span className={styles.schedule__training}>17:00 - 17:55</span>
          <span className={styles.schedule__training}>19:00 - 19:55</span>
        </span>
        <span className={styles.schedule__day}>
          <span className={styles.schedule__title}>Onsdag</span>
          <span className={styles.schedule__training}>12:00 - 12:55</span>
          <span className={styles.schedule__training}>18:00 - 18:55</span>
        </span>
        <span className={styles.schedule__day}>
          <span className={styles.schedule__title}>Torsdag</span>
          <span className={styles.schedule__training}>10:00 - 10:55</span>
          <span className={styles.schedule__training}>12:00 - 12:55</span>
          <span className={styles.schedule__training}>17:00 - 17:55</span>
          <span className={styles.schedule__training}>19:00 - 19:55</span>
        </span>
        <span className={styles.schedule__day}>
          <span className={styles.schedule__title}>Fredag</span>
          <span className={styles.schedule__training}>12:00 - 12:55</span>
          <span className={styles.schedule__training}>19:00 - 19:55</span>
        </span>
        <span className={styles.schedule__day}>
          <span className={styles.schedule__title}>Lördag</span>
          <span className={styles.schedule__training}>Stängd</span>
        </span>
        <span className={styles.schedule__day}>
          <span className={styles.schedule__title}>Söndag</span>
          <span className={styles.schedule__training}>14:00 - 14:55</span>
        </span>
      </section>
    </>
  );
};

export default ScheduleComponent;
