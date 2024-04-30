import { ProductProps } from "@/api/products/db";
import Link from "next/link";

const ProductCard: React.FC<ProductProps> = ({
  product,
  name,
  price,
  description,
  img,
}) => {
  return (
    <Link href={`/SHOP/${product}`}>
      <section>
        <h5>{name}</h5>
        <h4>{price}</h4>
      </section>
    </Link>
  );
};

export default ProductCard;
