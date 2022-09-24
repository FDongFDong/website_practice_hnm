import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
  let { id } = useParams();
  const getProductDetail = async () => {
    console.log('?');
    let url = `http://localhost:3004/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('asdasd', data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return <div></div>;
};

export default ProductDetail;
