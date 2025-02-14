'use client'
import { useRouter } from "next/navigation"
export default function Studentlogin(){
    const router=useRouter()
    return(
        <>
            <h1>Student Login Page</h1>
            <br/>
            <br/>
            <button onClick={()=>router.push("/login")}>Login Page</button>
            <br/><br/>
            <button onClick={()=>router.push("/")}>Home Page</button>
        </>
    )
}