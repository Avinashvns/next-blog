import Link from "next/link";


export default function Studentlist(){
    return (
        <>
            <Link href="/">Home Page</Link>
            <br/><br/>
            <h1>Student List </h1>
            <br/><br/>
            <ul style={{marginLeft : "40px"}} >
                <li><Link href="/studentlist/1" >Avi</Link></li>
                <li><Link href="/studentlist/2" >Ram</Link></li>
                <li><Link href="/studentlist/3" >Shyam</Link></li>
                <li><Link href="/studentlist/4" >Ravan</Link></li>
            </ul>
        </>
    )
}