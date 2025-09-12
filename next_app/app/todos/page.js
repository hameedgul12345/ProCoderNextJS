import List1 from "@/components/List1";
import List2 from "@/components/List2";
import List3 from "@/components/List3";
import { Suspense } from "react";
const Todos=async()=>{
  
//   const data1 = await fetch("https://procodrr.vercel.app/?sleep=2000");
//   const response1 = await data1.json();
//   const data2 = await fetch("https://procodrr.vercel.app/?sleep=4000");
//   const response2 = await data2 .json();
//   const data3 = await fetch("https://procodrr.vercel.app/?sleep=6000");
//   const response3 = await data3.json();
   
const [response1,response2,response3]=await Promise.all([
  fetch("https://procodrr.vercel.app/?sleep=2000"),
  fetch("https://procodrr.vercel.app/?sleep=4000"),
  fetch("https://procodrr.vercel.app/?sleep=6000")
]);
const [data1,data2,data3]=await Promise.all([
  response1.json(),
  response2.json(),
  response3.json()
]);
   
    // console.log(response);
    return(
       <>
       {JSON.stringify(data1)}
       {JSON.stringify(data2)}
       {JSON.stringify(data3)}



       </>   
    )
   
}
export default Todos;