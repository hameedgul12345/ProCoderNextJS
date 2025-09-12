import React from 'react'
import Image from 'next/image'
function page() {
  return (
    <div>
     
<img className='w-[300px] h-[400px]' src="https://images.unsplash.com/photo-1534528741777-53994a69daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="images" />

<Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="images" width={300} height={400} /> 
    </div>
  )
}

export default page