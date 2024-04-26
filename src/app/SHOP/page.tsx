import { getProduct } from "../../lib/actions/actions";

export default async function Home() {
  const data = await getProduct();
  console.log(data);
  return (
    <main>
      <h1>SHOP</h1>
      <div>
        <h1>List of Items</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
