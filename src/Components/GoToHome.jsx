import React from "react";
import { Link } from "react-router-dom";

const GoToHome = () => {
  return (
    <Link to={`/`}>
      <button className="underline hover:text-gray-800">GoToHome</button>
    </Link>
  );
};

export default GoToHome;
