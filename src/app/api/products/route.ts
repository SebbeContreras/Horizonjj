import { products } from "./db";

export async function GET() {
  return Response.json(products);
}
