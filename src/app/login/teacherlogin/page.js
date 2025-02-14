'use client'
import { useRouter } from "next/navigation"

export default function Teacherlogin(){
    const router=useRouter()
    return(
        <>
            <h1 className="heading">Teacher Login Page</h1>
            <br/>
            <br/>
            <button onClick={()=>router.push("/login")}>Login Page</button>
            <br/><br/>
            <button onClick={()=>router.push("/")}>Home Page</button>
        </>
    )
}