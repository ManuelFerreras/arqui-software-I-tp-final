import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // 	userDto.PasswordHash = HashPassword(userDto.PasswordHash)
	// user, err := clients.CreateUser(userDto.Email, userDto.Username, userDto.FirstName, userDto.LastName, userDto.UserType, userDto.PasswordHash)

  const data = await request.json();
  const { Email, PasswordHash, Username, FirstName, LastName, UserType } = data;
  console.log(data)

  const baseUrl = process.env.BASE_API_URL ?? "";

  const usersReq = await fetch(`${baseUrl}/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: Email, password_hash: PasswordHash, username: Username, name: FirstName, last_name: LastName, usertype: UserType })
  });
  
  const usersJson = await usersReq.json();
  console.log(usersJson);

  if (usersJson.error) return NextResponse.json({ message: usersJson.error }, { status: 401 });
  return NextResponse.json({ message: 'Created.' }, { status: 200 });
}