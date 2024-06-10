import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const baseUrl = process.env.BASE_API_URL ?? "";

  // Get courseId from query params.
  const courseId = request.nextUrl.searchParams.get('courseId');
  const courseReq = await fetch(`${baseUrl}/course/${courseId}`);
  const courseJson = await courseReq.json();
  
  return NextResponse.json({ message: 'Courses fetched', course: courseJson }, { status: 200 });
}