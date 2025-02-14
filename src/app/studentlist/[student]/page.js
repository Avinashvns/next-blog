'use client'  // because using params
import { use } from 'react';

export default function Student({params}){
    const {student}=use(params)
    return(
        <>
            {/* <h1>Student Details : {student}</h1> */}
            <h1>Student Details: {student.charAt(0).toUpperCase() + student.slice(1)}</h1>
        </>
    )
}