import Link from "next/link";

export default function Login(){
    return(
        <>
            <h1>Login Page</h1>
            <br/><br/>
            <Link href={"/login/studentlogin"}>Go To Student Login page</Link>
            <br/><br/>
            <Link href={"/"}>Go To Home page</Link>

        </>
    )
}