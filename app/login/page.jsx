import { SignIn } from "@clerk/nextjs"
// import Link from "next/link"

const page = () => {
  return (
    <div className="flex w-screen justify-center items-center absolute top-1/3 ">
      <SignIn />
    </div>
  )
}

export default page
