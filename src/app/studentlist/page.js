'use client'
import Link from "next/link";

export default function Studentlist(){
    const allStudents=['avi','ram','shyam','ravan']
    return (
        <>
            <Link href="/">Home Page</Link>
            <br/><br/>
            <h1>Student List </h1>
            <br/><br/>
            <ul style={{marginLeft : "40px"}} >
            {allStudents.map((student) => (
                    <li key={student}>
                        <Link href={`/studentlist/${student}`}>
                            {student.charAt(0).toUpperCase() + student.slice(1)}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}