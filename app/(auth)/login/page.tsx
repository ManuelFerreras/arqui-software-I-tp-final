import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import S from "./Login.module.css";
import { CardContent, CardFooter, Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Login() {
  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-md ">
        <div className="flex justify-center py-6">
          <div className={`${S.titleContainer} ml-2`}>
            <h1 className={`text-2xl font-bold ${S.title}`}>UCC</h1>
            <Image src="/triangulito.png" alt="UCCedemy" width="15" height={20} className={S.triangulito} />
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-[rgb(159,51,233)]">Login</CardTitle>
          <CardDescription>Enter your email and password to sign in to your account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label  htmlFor="email">
              Email
            </Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label  htmlFor="password">
                Password
              </Label>
              <Link
                className="text-sm font-medium text-[rgb(159,51,233)] hover:underline dark:text-[rgb(159,51,233)]"
                href="#"
              >
                Forgot password?
              </Link>
            </div>
            <Input id="password" required type="password" />
          </div>
        </CardContent>
        <CardFooter className="grid gap-2">
          <Button className="w-full bg-[rgb(159,51,233)] text-white hover:bg-[rgb(159,51,233)]/90" type="submit">
            Sign In
          </Button>
          <Link href="/register">
            <Button
              className="w-full border-[rgb(159,51,233)] text-[rgb(159,51,233)] hover:text-[rgb(159,51,233)] hover:bg-[rgb(159,51,233)]/10"
              variant="outline"
            >
              Register
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
