import React from "react";
import { Link, useLocation } from "react-router-dom";

const Page02 = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter(x => x);
  console.log(pathnames);
  let BreadcrumbsPath = "";

  return (
    <div>
      <Link to={`/thirteen`}>Home</Link>
      {pathnames.map((name, index) => {
        BreadcrumbsPath += `/${name}`;
        return (
          <span key={index} className="">
            {" "}/{name}
          </span>
        );
      })}
    </div>
  );
};

export default Page02;
