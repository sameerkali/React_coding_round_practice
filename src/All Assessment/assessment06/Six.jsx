import React, { useState } from "react";
import GoToHome from "../../Components/GoToHome";

const Six = () => {
  const api = 'http://api.tvmaze.com/search/shows?q=ass'

const [searchKeys, setSearchKeys] = useState('');
console.log(searchKeys)
  const handleChangeSearch = (e) => {
    setSearchKeys(e.target.value);
  }


  return (
    <div className="flex flex-col   h-screen items-center mt-20">
      <div className="">
        <GoToHome />
      </div>
      <div className="w-[40%]">
        <input
          className="border-solid border-2 border-gray-500 rounded-md px-6 py-3  mt-5 w-full"
          placeholder="search..."
          type="search"
          onChange={handleChangeSearch}
        />
        <div className={`border-solid border-2 border-gray-500 rounded-md h-40 hidden`} >
          {`search data`}
        </div>
      </div>
    </div>
  );
};

export default Six;
