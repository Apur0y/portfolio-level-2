import { connectDB } from "@/src/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
   const result= await connectDB();
    return NextResponse.json({ status: result});
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}