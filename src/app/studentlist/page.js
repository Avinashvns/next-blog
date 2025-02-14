import Link from "next/link";


export default function Studentlist(){
    return (
        <>
            <Link href="/">Home Page</Link>
            <br/><br/>
            <h1>Student List </h1>
            <br/><br/>
            <ul style={{marginLeft : "40px"}} >
                <li><Link href="/studentlist/avi" >Avi</Link></li>
                <li><Link href="/studentlist/ram" >Ram</Link></li>
                <li><Link href="/studentlist/shyam" >Shyam</Link></li>
                <li><Link href="/studentlist/ravan" >Ravan</Link></li>
            </ul>
        </>
    )
}