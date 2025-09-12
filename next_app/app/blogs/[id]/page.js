"use client";
import React from 'react'
import { useParams } from 'next/navigation';

const page = () => {
  const {id}=useParams();
  return (
        <div>
            <h1>Blog</h1>
            <p>Blog {id}</p>
        </div>
  )
}

export default page