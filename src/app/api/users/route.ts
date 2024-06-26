import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../lib/models/userModel";

export async function GET(request: Request) {
  try {
    await dbConnect();
    const users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    return new NextResponse(" " + error);
  }
}
