import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import products from './products';
import ReactStars from 'react-stars';
import { useNavigate } from "react-router-dom";
import './ProductListingPage.css'; // Import the CSS file

const ProductListingPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <Container>
      <Row>
        {products.map((product, index) => (
          <Col key={index} xs={12} md={4} className="mb-4">
            <Card onClick={() => handleCardClick(product.id)}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>${product.price}</strong>
                </Card.Text>
                <ReactStars count={5} value={product.rating} size={24} activeColor="#ffd700" />
                <button>❤️</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductListingPage;

