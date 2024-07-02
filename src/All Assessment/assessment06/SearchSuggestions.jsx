import React, { useEffect, useState } from "react";
import GoToHome from "../../Components/GoToHome";

const SearchSuggestions = () => {

  const [searchKeys, setSearchKeys] = useState("");
  const [apiData, setApiData] = useState([]);
  console.log(apiData);

  const apiCall = async () => {
    const data = await fetch(`https://api.tvmaze.com/search/shows?q=${searchKeys}`)
    const readableData = await data.json();
    setApiData(readableData)
  };

  useEffect(
    () => {
      try {
        apiCall();
      } catch (error) {
        console.error(error);
      }
    },
    [searchKeys]
  );

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
          onChange={(e)=>setSearchKeys(e.target.value)}
        />
        <div
          className={`border-solid border-2 border-gray-500 rounded-md h-[30rem] flex  flex-col ${!searchKeys ? 'hidden' : 'flex'}`}
        >
          {apiData.map(data => (
           <a className="text-black mr-10 border-b-2 mb-1 p-2" target="_blank" key={data?.show?.id} href={data?.show?.url}>
              {data?.show?.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestions;
