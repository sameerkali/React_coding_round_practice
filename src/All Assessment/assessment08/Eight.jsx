// import React from 'react';
// import GoToHome from '../../Components/GoToHome';

// const Eight = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="bg-gray-800 text-white p-4 text-center">
//         Header
//       </header>
//       <div className="flex flex-1">
//         <aside className="bg-gray-200 p-4 w-1/4 hidden lg:block">
//           Left Sidebar
//         </aside>
//         <main className="flex-1 p-4">
//           Main Content
//         </main>
//         <aside className="bg-gray-200 p-4 w-1/4 hidden lg:block">
//           Right Sidebar
//         </aside>
//       </div>
//       <footer className="bg-gray-800 text-white p-4 text-center">
//         Footer
//       </footer>
//     </div>
//   );
// };

// export default Eight

import React from "react";
import GoToHome from "../../Components/GoToHome";

const Eight = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="absolute top-[50%] left-[47%]"><GoToHome/></div>
    <header className="bg-purple-200 min-h-[10vh]">header</header>
    <div className="flex min-h-[80vh]">
      <aside className="bg-red-300 sm:flex hidden w-[10rem]">left</aside>
      <div className="bg-yellow-300 flex-1">home</div>
      <aside className="bg-red-300 sm:flex hidden  w-[10rem]">right</aside>
    </div>
    <footer className="bg-purple-200 min-h-[10vh]">footer</footer>
  </div>
  
  );
};

export default Eight;
