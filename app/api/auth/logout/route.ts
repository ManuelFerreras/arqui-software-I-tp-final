import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = cookies();
  cookieStore.delete("token");

  return NextResponse.json({ message: 'Logged Out.' }, { status: 200 });
}