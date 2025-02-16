import Product from "./product";

async function fetchData() {  // ✅ Define async function inside useEffect
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    return data.products
}

export default async function ProductList(){
    let product = await fetchData()
    return (
        <>
            <h1>Product List</h1>
            {
                product.map((item)=>(
                    <div key={item.id} >
                        <h3 >Product Name : {item.title}</h3>
                        <Product />
                    </div>
                ))
            }
        </>
    )
}