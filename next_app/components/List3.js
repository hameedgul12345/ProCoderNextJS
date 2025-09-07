async function List3() {
  const data = await fetch("https://procodrr.vercel.app/?sleep=6000");
  const response = await data.json();
   
  // console.log(response);
    return(
          <div>
          {JSON.stringify(response)}
          </div> 
    )
}

export default List3