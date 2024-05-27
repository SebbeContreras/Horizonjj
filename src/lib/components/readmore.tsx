"use client";

import Link from "next/link";
import styles from "../components/heroImage.module.css";
const ReadMore = ({ value }: any) => {
  let redirect = "";
  switch (value) {
    case "Om oss":
      redirect = "/ABOUT";
      break;
    case "Schema":
      redirect = "/SCHEDULE";
      break;
    case "Bli medlem":
      redirect = "/REGISTER";
      break;
    default:
      break;
  }
  return (
    <>
      <Link href={redirect}>
        <section className={styles.btn}>{value}</section>
      </Link>
    </>
  );
};
export default ReadMore;
