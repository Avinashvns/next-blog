'use client'
export default function Product({price}) {
    return (
        <>
            <button onClick={()=>alert(`Product Price : ${price}`)} >Click Me</button>
        </>
    )
}