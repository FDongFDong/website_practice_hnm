import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    // 쿼리 값이 없는 경우 빈 문자
    let searchQuerey = query.get('q') || '';

    let url = `http://localhost:3004/products?q=${searchQuerey}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
      <ProductCard />
    </div>
  );
};

export default ProductAll;
