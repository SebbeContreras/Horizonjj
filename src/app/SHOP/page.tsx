import { Product } from "@/api/products/db";
import { getProducts } from "../../lib/actions/actions";
import ProductCard from "../../lib/components/productCard";
import styles from "../SHOP/page.module.css";

export default async function Home() {
  const data: Product[] = await getProducts();
  return (
    <main>
      <h1 className={styles.shop__header}>SHOP</h1>
      <div className={styles.shop__container}>
        {data.map((item) => (
          <ProductCard
            key={item.id}
            product={item.id}
            name={item.name}
            description={item.description}
            img={item.img}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </main>
  );
}
