import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:3004/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  const choiceDropdown = (event) => {
    console.log('choiceDropdown =>', event.target);
  };
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img}></img>
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.choice === true ? 'Conscious choice' : ''}</div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu onClick={(event) => choiceDropdown(event)}>
              {product?.size.map((size) => {
                return <Dropdown.Item href="#/action-1">{size}</Dropdown.Item>;
              })}
            </Dropdown.Menu>
          </Dropdown>
          <div>
            <Button variant="dark">추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
