import { Product } from "@/api/products/db";
import { getCart } from "../../../lib/actions/actions";
import Image from "next/image";
import style from "../CHECKOUT/page.module.css";
import BuyBtn from "../../../lib/components/GotoBtn";

const Checkout = async () => {
  const data: Product[] = await getCart();

  let sums = 0;
  data.map((item) => (sums += item.price));
  return (
    <span className={style.checkout}>
      <h1>Din order</h1>
      <ul className={style.checkout__list}>
        {data.map((e) => {
          return (
            <li key={e.id} className={style.checkout__item}>
              <Image src={e.img} alt={e.description} width={125} height={150} />
              <span>
                <h5>{e.name}</h5>
                <p>{`${e.price}kr X${e.quantity}`}</p>
              </span>
            </li>
          );
        })}
      </ul>
      <h2>Totalt: {sums}</h2>
      <BuyBtn />
    </span>
  );
};
export default Checkout;
