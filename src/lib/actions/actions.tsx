"use server";

import { revalidatePath } from "next/cache";
import Users, { UserDoc } from "../models/model";
import { Product } from "@/api/products/db";

export const addUser = async (data: UserDoc) => {
  try {
    console.log(data);
    const user = await Users.findOne({ email: data.email });
    if (user) {
      throw new Error("Email already exist");
    } else {
      Users.create(data);
    }
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/ACADEMY/LOGIN");
};

export const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products");

  return res.json();
};
export const getProduct = async (id: number) => {
  const res = await fetch("http://localhost:3000/api/products");
  const data: Product[] = await res.json();

  const item = data.find((i) => (i.id = id));
  console.log(item);
  return item;
};
