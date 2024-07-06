import React from "react";
import { Link } from "react-router-dom";

const GoToHome = () => {
  return (
    <Link to={`/`}>
      <button className="px-5 border border-gray-400 rounded-lg">GoToHome</button>
    </Link>
  );
};

export default GoToHome;
