import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import products from './products';
import ReactStars from 'react-stars';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
  };

  return (
    <Container className="py-3 py-md-5 bg-light">
      <Row>
        <Col md={5} className="mt-3">
          <div className="bg-white border">
            <img src={product.images[currentIndex]} className="w-100" alt={product.name} />
            <div className="caption"></div>
          </div>
          <div className="navigation">
            <button onClick={prevSlide} className="nav-button">❮</button>
            <button onClick={nextSlide} className="nav-button">❯</button>
          </div>
          <div className="thumbnail-container mt-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </Col>
        <Col md={7} className="mt-3">
          <div className="product-view">
            <h4 className="product-name">
              {product.name}
              <label className="label-stock bg-success">In Stock</label>
            </h4>
            <hr />
            <p className="product-path">
              Home / Category / Product / {product.name}
            </p>
            <div>
              <span className="selling-price">{product.price}</span>
              <span className="selling-price"> DT{product.originalPrice}</span>
            </div>
            <div className="mt-2">
              <button className="btn btn1"> <i className="fa fa-shopping-cart"></i> Add To Cart</button>
              <button className="btn btn1"> <i className="fa fa-heart"></i> Add To Wishlist </button>
            </div>
            <ReactStars count={5} value={product.rating} size={24} activeColor="#ffd700" />
            <div className="mt-3">
              <h5 className="mb-0"></h5>
              <p>{product.description}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="mt-3">
          <div className="card">
            <div className="card-header bg-white">
              <h4>Description</h4>
            </div>
            <div className="card-body">
              <p>{product.longDescription}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;


