"use client";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"
import { CourseType } from "@/lib/types";
import { useRouter } from "next/navigation";

export default function Course({ params }: { params: { slug: string } }) {
  const [course, setCourse] = useState<CourseType>()
  const [src, setSrc] = useState<string>("/placeholder.svg")
  const [alreadyEnrrolled, setAlreadyEnrolled] = useState(false)
  const router = useRouter();

  useEffect(() => {
    setAlreadyEnrolled(course?.is_subscribed ?? false)
  }, [course]);

  useEffect(() => {
    fetch(`/api/courses/courseId?courseId=${params?.slug}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data?.course)
        setSrc(data?.course?.ImageURL ?? "/placeholder.svg")
      })
  }, [])

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString()
  }

  const enroll = async () => {
    if (alreadyEnrrolled) return;

    const response = await fetch(`/api/courses/subscribe`, {
      method: "POST",
      body: JSON.stringify({ courseId: params?.slug }),
    });

    const responseJson = await response.json();
    console.log(responseJson);

    if (response.ok) {
      // Show success.
      const newCourse = { ...course, is_subscribed: true } as CourseType;
      setCourse(newCourse);
      router.push(`/success/${params?.slug}`);
    } else {
      // Invalid.
      console.error("Error while enrolling to course.");
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6 h-full">
      <div className="grid gap-4 md:gap-10 items-start">
        <Image
          alt="Course Preview"
          className="rounded-lg w-full aspect-[16/9] object-cover"
          height={450}
          onError={() => {
            setSrc("/placeholder.svg");
          }}
          src={src}
          width={800}
        />
        <div className="grid gap-4">
          <h1 className="text-3xl font-bold">{course?.course_name}</h1>
          <div className="grid gap-2">
            <p className="text-gray-500 dark:text-gray-400">{course?.description}</p>
            <div className="flex items-center gap-2">
              <UserIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              {/* TODO: Change hardcoded instructor name. */}
              <span className="text-sm text-gray-500 dark:text-gray-400">Instructor: John Doe</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <span className="text-sm text-gray-500 dark:text-gray-400">{course?.length} hours of video</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Last updated: {formatDate(course?.LastUpdated ?? "")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Comments</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">Sarah Johnson</h4>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This course is amazing! The instructor explains everything so clearly and the projects are really
                  engaging. Highly recommended for anyone interested in web development.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">Alex Smith</h4>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  I&aposve been looking for a comprehensive web development course for a while, and this one exceeded my
                  expectations. The instructor is knowledgeable and the course content is well-structured. Definitely
                  worth the investment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Button onClick={enroll} variant={!alreadyEnrrolled ? "default" : "outline"} disabled={alreadyEnrrolled} size="lg">{!alreadyEnrrolled ? "Enroll in Course" : "Already Enrolled"}</Button>
      </div>
    </div>
  )
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}