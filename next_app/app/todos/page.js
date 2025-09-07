import List1 from "@/components/List1";
import List2 from "@/components/List2";
import List3 from "@/components/List3";
import { Suspense } from "react";
const Todos=async()=>{
  
   
   
    // console.log(response);
    return(
       <>
     <Suspense fallback={<div>Loading...</div>}>
     <List1/>    
     </Suspense>
       <Suspense fallback={<div>Loading...</div>}>
       <List2/>    
       </Suspense>
       <Suspense fallback={<div>Loading...</div>}>
       <List3/>    
       </Suspense>
       </>   
    )
   
}
export default Todos;