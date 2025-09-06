"use client";
import { useState,useEffect } from "react";
const Posts=()=>{
   const [products,setProducts]=useState([]);
   useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(response=>response.json())
    .then(data=>setProducts(data))
    .catch(error=>console.log(error));
   },[]);
    return(
        <div className="products container mx-auto p-4 bg-white rounded-lg shadow-md w-full my-4 flex flex-row flex-wrap items-center justify-center">
            {products.map((product)=>(
                <div className="product container mx-auto p-4 bg-white rounded-lg shadow-md my-4 w-1/4 h-1/4" key={product.id}>
                            
                            <img src={product.image} alt={product.title} className="w-1/2 h-1/2" />
                            <h1 className="text-2xl font-bold w-full">{product.title.slice(0,10)}...</h1>
                         <p className="text-lg font-bold">{product.description.slice(0,100)}...</p>
                       
                      
                </div>
            ))}
        </div>
    )
}
export default Posts;