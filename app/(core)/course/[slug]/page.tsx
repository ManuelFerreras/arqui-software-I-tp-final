"use client";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"
import { CourseType } from "@/lib/types";

export default function Course({ params }: { params: { slug: string } }) {
  const [course, setCourse] = useState<CourseType>()
  const [src, setSrc] = useState<string>("/placeholder.svg")

  useEffect(() => {
    fetch(`/api/courses/courseId?courseId=${params?.slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCourse(data?.course)
        setSrc(data?.course?.ImageURL ?? "/placeholder.svg")
      })
  }, [])

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString()
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
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">4.2 (1,234 reviews)</span>
          </div>
          <div className="grid gap-2">
            <p className="text-gray-500 dark:text-gray-400">{course?.description}</p>
            <div className="flex items-center gap-2">
              <UserIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
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
        <Button size="lg">Enroll in Course</Button>
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


function StarIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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