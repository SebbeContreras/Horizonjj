import { NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import Events from "../../../lib/models/eventModel";

export async function GET(request: Request) {
  try {
    await dbConnect();

    const events = await Events.find();

    return NextResponse.json(events);
  } catch (error) {
    return new NextResponse(" " + error);
  }
}
