import { Product } from "@/api/products/db";
import { getCart } from "../actions/actions";
import AddQuantity from "./addQuantity";
import SubQuantity from "./subQuantity";
import styles from "../../app/SHOP/page.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ShowCart = () => {
  let total = 0;
  const [cartList, setCartList] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data: Product[] = await getCart();
      setCartList(data);
    };
    fetchData();
  }, []);
  return (
    <ul className={styles.cart__display}>
      {cartList.map((e) => {
        total += e.price;
        return (
          <li key={e.id} className={styles.cart__item}>
            <Image width={50} height={75} src={e.img} alt={e.description} />
            <h6>{e.name}</h6>
            <SubQuantity cartId={e.id} />
            <p>{e.quantity}</p>
            <AddQuantity cartId={e.id} />
          </li>
        );
      })}
      <li className={styles.cart__item}>
        <p>
          <b>totalt:</b> {total} kr
        </p>
      </li>
      <li className={styles.cart__item}>
        <Link href={"/SHOP/CHECKOUT"}>
          <button>Kassan</button>
        </Link>
      </li>
    </ul>
  );
};

export default ShowCart;
