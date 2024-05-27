import { Product } from "@/api/products/db";
import { getProduct, getProducts } from "../../../lib/actions/actions";
import AddCartServer from "../../../lib/components/addCartServer";

export async function generateStaticParams() {
  const data: Product[] = await getProducts();

  return data.map((i) => ({
    slug: i.id,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params;
  const data: Product | undefined = await getProduct(id);

  return (
    <main>
      <h1>{data!.name}</h1>
      <h2>{data!.price}SEK</h2>
      <p>Beskrivning: {data!.description}</p>
      <p>Status: {data!.stock}</p>
      {
        //<AddCartItem cartId={data!.name} img={data!.img} price={data!.price} />
      }
      {<AddCartServer cartId={data!.id} />}
    </main>
  );
}
