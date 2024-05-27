import ReadMore from "../components/readmore";
import styles from "../components/heroImage.module.css";
const HeroImage = () => {
  const titles = ["Om oss", "Schema", "Bli medlem"];
  return (
    <>
      {titles.map((title) => {
        return (
          <section key={title} className={styles[title.replace(/\s+/g, "")]}>
            <ReadMore value={`${title}`} />
          </section>
        );
      })}
    </>
  );
};

export default HeroImage;
