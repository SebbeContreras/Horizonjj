"use server";

import { revalidatePath } from "next/cache";
import Users, { UserDoc } from "../models/model";

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

export const getProduct = async () => {
  const res = await fetch("http://localhost:3000/api/products");

  return res.json();
};
