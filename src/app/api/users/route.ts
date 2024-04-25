import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Users from "../../../lib/models/model";

export async function GET(request: Request) {
  try {
    await dbConnect();

    const users = await Users.find();
    return NextResponse.json(users);
  } catch (error) {
    return new NextResponse(" " + error);
  }
}
