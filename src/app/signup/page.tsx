"use client"
import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Axios } from "axios"

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })

  // talking to the database
  const onSignup = async () => {}

  return (
    <div>
      <nav className="flex justify-end">
        <button className="py-3 px-5 m-4 rounded border-2 border-purple-500 hover:bg-purple-500 w-fit text-purple-500 hover:text-white text-xl">
          Sign up
        </button>
      </nav>
      <main className="">Sign up</main>
    </div>
  )
}
