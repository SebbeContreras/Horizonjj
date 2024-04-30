import { NextRequest } from "next/server";
import { products } from "./db";

export async function GET(req: NextRequest) {
  return Response.json(products);
}
