'use client'

import { use } from "react"

export default function Lecture({params}){
    const data=use(params)
    return(
        <>
            <h1> Day : {data.lecture[0]}</h1>
            <h1> Lecture : {data.lecture[1]}</h1>
        </>
    )
}