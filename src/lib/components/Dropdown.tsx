"use client";

import { useState } from "react";
import styles from "../../app/(ACADEMY)/page.module.css";
import Link from "next/link";

function DropdownMenu() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  return (
    <div
      className={styles.menu}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <p className={styles.menu__p}>TRÄNINGSGYM</p>
      {isDropdownVisible && (
        <div className={styles.dropdown__menu}>
          <p className={styles.menu__p}>TRÄNINGSGYM</p>
          <ul className={styles.dropdown__list}>
            <li className={styles.dropdown__item}>
              <Link href={"/ABOUT"}>OM OSS</Link>
            </li>
            <li className={styles.dropdown__item}>
              <Link href={"/SCHEDULE"}>SCHEMA</Link>
            </li>
            <li className={styles.dropdown__item}>
              <Link href={"/REGISTER"}>BLI MEDLEM</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
