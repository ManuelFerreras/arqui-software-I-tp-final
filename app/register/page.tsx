import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import S from "./Register.module.css";
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-md">
        <div className="flex justify-center py-6">
          <div className={`${S.titleContainer} ml-2`}>
            <h1 className={`text-2xl font-bold ${S.title}`}>UCC</h1>
            <Image src="/triangulito.png" alt="UCCedemy" width="15" height={20} className={S.triangulito} />
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-[rgb(159,51,233)]">Register</CardTitle>
          <CardDescription>Enter your details to create a new account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">
              Name
            </Label>
            <Input id="name" placeholder="John Doe" required type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">
              Email
            </Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">
                Password
              </Label>
            </div>
            <Input id="password" required type="password" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="confirm-password">
                Confirm Password
              </Label>
            </div>
            <Input id="confirm-password" required type="password" />
          </div>
        </CardContent>
        <CardFooter className="grid gap-2">
          <Button className="w-full bg-[rgb(159,51,233)] text-white hover:bg-[rgb(159,51,233)]/90" type="submit">
            Register
          </Button>
          <Link href="/login">
            <Button
              className="w-full border-[rgb(159,51,233)] text-[rgb(159,51,233)] hover:bg-[rgb(159,51,233)]/10 hover:text-[rgb(159,51,233)]"
              variant="outline"
            >
              Sign In
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}