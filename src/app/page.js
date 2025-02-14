'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter()
  const navigate=(name)=>{
    router.push(name)
  }
  return(
    <main>
      <h1>Link and Navigation</h1>
      <br />
      <Link href={"/login"}>Go to login page</Link>
      <br/><br/>
      <h1>Use Navigation for next page (Navigate)</h1>
      <br/>
      <button onClick={()=>router.push("/login")}>Navigate Login Page</button>
      <br/><br/>
      <button onClick={()=>navigate("/login")}>Navigate with function to Login Page</button>
    </main>
  )
}
