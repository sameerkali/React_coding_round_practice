import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col gap-10">
      <div className="text-5xl">404 Not Found</div>
      <Link to={`/`} className="underline text-5xl text-[#6c5ce7]">
      Home
      </Link>
    </div>
  );
};

export default Page404;
