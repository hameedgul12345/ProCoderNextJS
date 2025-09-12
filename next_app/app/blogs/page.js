"use client";
import { useState,useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Blogs = () => {
    const blogs=[1,2,3,4,5]
  const randomNumber=Math.random();
  console.log(randomNumber);
  if(randomNumber>0.5){
    throw new Error("Error {id} not found");
  }
  return (
    <>
    <h1>Blogs</h1>
        
    </>
  );
}

    export default Blogs;