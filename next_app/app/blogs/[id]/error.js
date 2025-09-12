"use client";
import React from 'react'
import { useParams } from 'next/navigation';
const error = () => {
  const {id}=useParams();
  return (
    <div>
        <h1>Error not found</h1>
        <p>Error not found please try again later</p>
    </div>
  )
}

export default error    