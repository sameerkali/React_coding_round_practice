import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Page02 from "./Page02";

const Page01 = () => {
  const [data, setData] = useState([]);
  console.log(data);

  const fetchData = async () => {
    try {
      const data = await fetch(`https://fakestoreapi.com/products`);
      const storeData = await data.json();
      setData(storeData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data == 0) return <div>loading...</div>;

  return (
    <div>
      <Link className='text-red-500 text-4xl' to={`/thirteen`}>back to home </Link>
      <Page02/>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* main data */}
        {data.map(d =>
          <Link
            to={`/page03/${d.id}`}
            key={d.id}
            className="bg-white shadow rounded overflow-hidden text-center"
          >
            <img
              src={d.image}
              className="h-44 w-auto mx-auto object-cover"
              alt={d.title}
            />
            <p className="p-4 text-center">
              {d.title}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Page01;
