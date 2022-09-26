import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    // 쿼리 값이 없는 경우 빈 문자
    let searchQuerey = query.get('q') || '';

    // let url = `https://my-json-server.typicode.com/FdongFdong/website_practice_hnm/products?q=${searchQuerey}`;
    // let response = await fetch(url);
    // let data = await response.json();
    // setProductList(data);

    dispatch(productAction.getProducts(searchQuerey));
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, index) => (
            <Col lg={3}>{<ProductCard item={menu} />}</Col>
          ))}
        </Row>
      </Container>
      <ProductCard />
    </div>
  );
};

export default ProductAll;
