'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return(
    <main>
      <h1>Link and Navigation</h1>
      <br />
      <Link href={"/login"}>Go to login page</Link>
    </main>
  )
}
