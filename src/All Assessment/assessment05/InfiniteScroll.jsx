// import React, { useState, useEffect } from "react";
// import GoToHome from "../../Components/GoToHome";

import { useEffect, useState } from "react";

// const InfiniteScroll = () => {
//   const [count, setCount] = useState(50);

//   useEffect(() => {
//       const onScroll = () => {
//         if (
//           window.innerHeight + window.scrollY >=
//           window.document.body.offsetHeight - 30
//         ) {
//           setCount(count + 50);
//         }
//       };

//       window.addEventListener("scroll", onScroll);
//       return () => window.removeEventListener("scroll", onScroll);

//     },
//     [count]);

//   const elements = [];
//   for (let i = 0; i < count; i++) {
//     elements.push(
//       <div key={i}>
//         {i + 1}
//       </div>
//     );
//   }
//   return (
//     <main className="flex flex-col items-center w-full">
//     <h1 className="text-4xl">Infinite Scroll</h1>
//     <GoToHome/>
//       {elements}
//     </main>
//   );
// };

const InfiniteScroll = () => {

  const [count, setCount] = useState(50);
  useEffect(() => {
const onscroll = () => {
  if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight){
 
    setCount(prev => prev + 50);
  }
}
let event = window.addEventListener("scroll", onscroll);
return () => window.removeEventListener("scroll", event);
  }, [count]);

  let elements = []
  for(let i=0; i<count; i++){
elements.push(
  <p key={i}>{i+1}</p>
)
  }

  return (
    <div>
      <h1>Infinite Scroll</h1>
      <div>{elements}</div>
    </div>
  );
};

export default InfiniteScroll;
