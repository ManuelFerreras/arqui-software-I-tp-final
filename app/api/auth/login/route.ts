import { NextResponse } from "next/server";

// type User struct {
// 	ID           int    `gorm:"primary_key"`
// 	UserName     string `gorm:"unique"`
// 	LastName     string
// 	UserType     bool // true for instructor, false for student
// 	PasswordHash string
// 	CreationTime time.Time
// 	LastUpdated  time.Time
// }

const sampleProfile = {
  UserName: 'Numa',
  LastName: 'Ferreras',
  UserType: true,
  PasswordHash: 'password',
  CreationTime: new Date(),
  LastUpdated: new Date()
}

export async function POST(request: Request) {
  // Handle login logic here
  const data = await request.json();
  const { email, password } = data;

  // Perform authentication and validation
  if (email === 'manuel.ferreras1@gmail.com' && password === 'password') {
    // Successful login
    return NextResponse.json({ message: 'Login successful', profile: sampleProfile }, { status: 200 });
  } else {
    // Invalid credentials
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }
}