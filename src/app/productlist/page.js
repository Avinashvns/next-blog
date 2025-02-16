'use client'
import { useEffect, useState } from "react"

export default function ProductList(){
    const [product,setProduct]=useState([])

    useEffect(() => {
        async function fetchData() {  // ✅ Define async function inside useEffect
            let response = await fetch("https://dummyjson.com/products");
            let data = await response.json();
            setProduct(data.products);
        }
        fetchData();  // ✅ Call the async function
    }, []);

    return (
        <>
            <h1>Product List</h1>
            {
                product.map((item)=>(
                    <h3 key={item.id}>Product Name : {item.title}</h3>
                ))
            }
        </>
    )
}