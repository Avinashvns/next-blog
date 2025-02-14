'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login(){
    const router=useRouter()
    const  navigate=(page)=>{
        router.push("/login" + page)
    }
    return(
        <>
            <h1>Login Page</h1>
            <br/><br/>
            {/* <Link href={"/login/studentlogin"}>Go To Student Login page</Link> */}
            <button onClick={()=>navigate("/studentlogin")}>Function Navigate Login Page</button>
            <br/><br/>
            <Link href={"/"}>Go To Home page</Link>

        </>
    )
}