"use server";

import { revalidatePath } from "next/cache";
import { UserDoc } from "../models/userModel";
import { Product } from "@/api/products/db";
import { cookies } from "next/headers";
import User from "../models/userModel";
import dbConnect from "../dbConnect";
import Events from "../models/eventModel";

export const addUser = async (data: UserDoc) => {
  try {
    dbConnect();
    const user = await User.findOne({ email: data.email });

    if (user) {
      throw new Error("Email already exist");
    } else {
      console.log(data);

      User.create(data);
    }
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/LOGIN");
};

export const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products");

  return res.json();
};
export const getData = async () => {
  const res = await fetch("http://localhost:3000/api/events");
  return res.json();
};
export const getProduct = async (id: number) => {
  const res = await fetch("http://localhost:3000/api/products");
  const data: Product[] = await res.json();
  const item = data.find((i) => i.id == id);
  return item;
};

export const getCart = async () => {
  const storedCookies = cookies();

  const data: Product[] = await getProducts();

  let storedCart: string = storedCookies.get("id")?.value || "";
  const convertedCart = storedCart?.split(" ");
  let cartList: Product[] = [];

  convertedCart.forEach((i) => {
    const found = data.find((product) => `${product.id}` === i);

    const exist = (e: Product) => e?.id === found?.id;
    if (i === "") {
    } else if (cartList.includes(found as Product)) {
      cartList[cartList.findIndex(exist)].quantity++;
      return cartList;
    } else {
      found!.quantity++;
      cartList.push(found as Product);
      return cartList;
    }
  });
  return cartList;
};

export const addItem = async ({ ...item }) => {
  const cookieStore = cookies();
  const getCart = cookieStore.get("id")?.value || "";
  const session = cookieStore.set(`id`, `${getCart} ${item.cartId}`);

  return null;
};

export const removeItem = async ({ ...item }) => {
  const cookieStore = cookies();
  const getCart = cookieStore.get("id")?.value || "";
  const deleteItem = getCart?.replace(item.cartId, " ") || "";
  const newCart = deleteItem.replace(/\s+/g, " ").trim();

  const session = cookieStore.set(`id`, `${newCart}`);
  if (cookieStore.get("id")?.value === "") {
    cookieStore.delete("id");
  }

  return null;
};
export const deleteItem = async () => {
  const cookieStore = cookies();
  cookieStore.delete("id");

  return null;
};
export const addBooking = async (user: any, userId: any) => {
  try {
    console.log("trying");
    dbConnect();
    const updateBooking = await Events.findOneAndUpdate(
      { _id: userId },
      { $push: { booked: user } },
      { new: true }
    );
    console.log(updateBooking);
  } catch (error) {
    console.log("got error");
    return error;
  }

  return null;
};
