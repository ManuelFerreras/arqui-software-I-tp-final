import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export async function GET(request: Request) {
  const cookiesStore = cookies();
  const cookie = cookiesStore.get("token");

  const cookieValue = JSON.parse(cookie?.value ?? "{}")
  const token = cookieValue?.token
  if (!token) return NextResponse.json({ message: "Not authenticated." }, { status: 401 });

  const decoded = jwtDecode(cookieValue?.token ?? "") as any;
  const userId = decoded?.id;

  const baseUrl = process.env.BASE_API_URL ?? "";
  const userReq = await fetch(`${baseUrl}/user/${userId}`);
  
  const userJson = await userReq.json();
  if (userJson.error) return NextResponse.json({ message: userJson.error }, { status: 401 });

  return NextResponse.json({ message: 'OK', user: userJson }, { status: 200 });
}