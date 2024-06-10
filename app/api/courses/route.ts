import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const baseUrl = process.env.BASE_API_URL ?? "";

  const category = request.nextUrl.searchParams.get('category') ?? "";
  const name = request.nextUrl.searchParams.get('name') ?? "";

  const coursesReq = await fetch(`${baseUrl}/courses/search?q=${name}&category=${category}`);

  const coursesJson = await coursesReq.json();
  const courses = coursesJson.results;
  
  return NextResponse.json({ message: 'Courses fetched', courses }, { status: 200 });
}