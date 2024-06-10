import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Handle login logic here
  const data = await request.json();
  const { email, password } = data;
  console.log(data);

  const baseUrl = process.env.BASE_API_URL ?? "";

  const usersReq = await fetch(`${baseUrl}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  
  const userJson = await usersReq.json();
  console.log(userJson);

  if (userJson.error) return NextResponse.json({ message: userJson.error }, { status: 401 });

  return NextResponse.json({ message: 'Logged In.', user: userJson }, { status: 200 });
}