import { ProductProps } from "@/api/products/db";
import Image from "next/image";
import Link from "next/link";
import styles from "../components/productCard.module.css";
import AddCartServer from "./addCartServer";

const ProductCard: React.FC<ProductProps> = ({
  product,
  name,
  price,
  description,
  img,
  id,
}) => {
  console.log(id);
  return (
    <section className={styles.product__card}>
      <Link href={`/SHOP/${product}`}>
        <Image width={250} height={300} src={img} alt={description} />
      </Link>
      <div className={styles.product__info}>
        <h4>{name}</h4>
        <p>{price} SEK</p>
        <AddCartServer cartId={id} />
      </div>
    </section>
  );
};

export default ProductCard;
