"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import style from "@/page.module.css";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ComponentB = dynamic(() => import("./showCart"), { ssr: false });

const DisplayCart = ({ sum }: any) => {
  const [showResults, setResults] = useState(false);
  return (
    <>
      <span className={style.icon} onClick={() => setResults(!showResults)}>
        <FaShoppingCart />
        <p className={style.cart__sum}>{sum.sum}</p>
      </span>
      {showResults && (
        <>
          <ComponentB />
        </>
      )}
    </>
  );
};

export default DisplayCart;
