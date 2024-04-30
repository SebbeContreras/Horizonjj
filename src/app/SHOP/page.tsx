import { Product } from "@/api/products/db";
import { getProducts } from "../../lib/actions/actions";
import ProductCard from "../../lib/components/productCard";

export default async function Home() {
  const data: Product[] = await getProducts();
  return (
    <main>
      <h1>SHOP</h1>
      <div>
        <h1>List of Items</h1>

        {data.map((item) => (
          <ProductCard
            key={item.id}
            product={item.id}
            name={item.name}
            description={item.description}
            img={item.img}
            price={item.price}
          />
        ))}
      </div>
    </main>
  );
}
