import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Page02 from './Page02';

const Page03 = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
     <Page02/>
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img src={product.image} alt={product.title} className="h-44 w-auto mx-auto object-cover" />
      <p className="mt-4">{product.description}</p>
      <p className="mt-2 font-bold">${product.price}</p>
      <Link className='text-red-500 text-4xl' to={`/page01`}>back to home </Link>
    </div>
  );
};

export default Page03;
