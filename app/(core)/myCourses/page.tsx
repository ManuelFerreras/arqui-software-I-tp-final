import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <main className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">My Courses</h1>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Input className="w-full md:w-auto" placeholder="Filter by name..." type="text" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <TagIcon className="w-4 h-4 mr-2" />
                Filter by tags
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px]">
              <DropdownMenuCheckboxItem>Web Development</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Data Science</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Digital Marketing</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Machine Learning</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {/* Cards */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="relative">
            <Image
              alt="Course Image"
              className="w-full h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded text-sm">
              4.8
              <StarIcon className="w-4 h-4 inline-block ml-1" />
            </div>
          </div>
          <div className="p-4 flex flex-col justify-between h-max">
            <div>
              <h3 className="text-lg font-semibold mb-2">Introduction To Analisis Matematico</h3>
              <p className="text-gray-500 line-clamp-2 mb-4">
                Learn the fundamentals of web development, including HTML, CSS, and JavaScript. Build your first website
                from scratch.
              </p>
              <div className="flex items-center text-gray-500 mb-4">
                <UserIcon className="w-4 h-4 mr-2" />
                <span>12,345 students</span>
              </div>
              <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-none whitespace-nowrap">
                <Badge>Web Development</Badge>
                <Badge>Beginner</Badge>
              </div>
            </div>
            <Link href="/course/1">
              <Button className="w-full">Enroll Now</Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="relative">
            <Image
              alt="Course Image"
              className="w-full h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded text-sm">
              4.8
              <StarIcon className="w-4 h-4 inline-block ml-1" />
            </div>
          </div>
          <div className="p-4 flex flex-col justify-between h-[-webkit-fill-available]">
            <div>
              <h3 className="text-lg font-semibold mb-2">Introduction</h3>
              <p className="text-gray-500 line-clamp-2 mb-4">
                Learn the fundamentals of web development, including HTML, CSS, and JavaScript. Build your first website
                from scratch.
              </p>
            </div>
            <div className="flex items-center text-gray-500 mb-4">
              <UserIcon className="w-4 h-4 mr-2" />
              <span>12,345 students</span>
            </div>
            <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-none whitespace-nowrap">
              <Badge>Web Development</Badge>
              <Badge>Beginner</Badge>
            </div>

            <Link href="/course/1">
              <Button className="w-full">Enroll Now</Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="relative">
            <Image
              alt="Course Image"
              className="w-full h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded text-sm">
              4.8
              <StarIcon className="w-4 h-4 inline-block ml-1" />
            </div>
          </div>
          <div className="p-4 flex flex-col justify-between h-max">
            <div>
              <h3 className="text-lg font-semibold mb-2">Introduction To Analisis Matematico</h3>
              <p className="text-gray-500 line-clamp-2 mb-4">
                Learn the fundamentals of web development, including HTML, CSS, and JavaScript. Build your first website
                from scratch.
              </p>
              <div className="flex items-center text-gray-500 mb-4">
                <UserIcon className="w-4 h-4 mr-2" />
                <span>12,345 students</span>
              </div>
              <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-none whitespace-nowrap">
                <Badge>Web Development</Badge>
                <Badge>Beginner</Badge>
              </div>
            </div>
            <Link href="/course/1">
              <Button className="w-full">Enroll Now</Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="relative">
            <Image
              alt="Course Image"
              className="w-full h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded text-sm">
              4.8
              <StarIcon className="w-4 h-4 inline-block ml-1" />
            </div>
          </div>
          <div className="p-4 flex flex-col justify-between h-[-webkit-fill-available]">
            <div>
              <h3 className="text-lg font-semibold mb-2">Introduction</h3>
              <p className="text-gray-500 line-clamp-2 mb-4">
                Learn the fundamentals of web development, including HTML, CSS, and JavaScript. Build your first website
                from scratch.
              </p>
            </div>
            <div className="flex items-center text-gray-500 mb-4">
              <UserIcon className="w-4 h-4 mr-2" />
              <span>12,345 students</span>
            </div>
            <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-none whitespace-nowrap">
              <Badge>Web Development</Badge>
              <Badge>Beginner</Badge>
            </div>

            <Link href="/course/1">
            <button onClick={() => window.alert("You were successfully enrolled to the course")}>Enroll</button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="relative">
            <Image
              alt="Course Image"
              className="w-full h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded text-sm">
              4.8
              <StarIcon className="w-4 h-4 inline-block ml-1" />
            </div>
          </div>
          <div className="p-4 flex flex-col justify-between h-max">
            <div>
              <h3 className="text-lg font-semibold mb-2">Introduction To Analisis Matematico</h3>
              <p className="text-gray-500 line-clamp-2 mb-4">
                Learn the fundamentals of web development, including HTML, CSS, and JavaScript. Build your first website
                from scratch.
              </p>
              <div className="flex items-center text-gray-500 mb-4">
                <UserIcon className="w-4 h-4 mr-2" />
                <span>12,345 students</span>
              </div>
              <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-none whitespace-nowrap">
                <Badge>Web Development</Badge>
                <Badge>Beginner</Badge>
              </div>
            </div>
            <Link href="/course/1">
              <Button className="w-full">Enroll Now</Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="relative">
            <Image
              alt="Course Image"
              className="w-full h-48 object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded text-sm">
              4.8
              <StarIcon className="w-4 h-4 inline-block ml-1" />
            </div>
          </div>
          <div className="p-4 flex flex-col justify-between h-[-webkit-fill-available]">
            <div>
              <h3 className="text-lg font-semibold mb-2">Introduction</h3>
              <p className="text-gray-500 line-clamp-2 mb-4">
                Learn the fundamentals of web development, including HTML, CSS, and JavaScript. Build your first website
                from scratch.
              </p>
            </div>
            <div className="flex items-center text-gray-500 mb-4">
              <UserIcon className="w-4 h-4 mr-2" />
              <span>12,345 students</span>
            </div>
            <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-none whitespace-nowrap">
              <Badge>Web Development</Badge>
              <Badge>Beginner</Badge>
            </div>

            <Link href="/course/1">
              <Button className="w-full">Enroll Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
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


function TagIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
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