import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faPinterest, faTiktok } from '@fortawesome/free-brands-svg-icons';
import sponsors from './sponsors'; // Correct import path
import products from './products'; // Assuming this is also in pages
import './Homepage.css';
import image1 from '../assets/112.jpg';
import image2 from '../assets/123.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <Container fluid className="homepage-container">
      {/* Title */}
      <Row className="justify-content-center my-4">
        <Col xs={12} className="text-center">
          <h2 className="homepage-title">Explore Top Subscription Boxes with Pack-e</h2>
        </Col>
      </Row>

      {/* Carousel */}
      <Row className="justify-content-center">
        <Col xs={10} md={8}>
          <Carousel className="carousel-container">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image2}
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image1}
                alt="Fifth slide"
              />
            </Carousel.Item>
            {/* Add more Carousel.Item for additional slides */}
          </Carousel>
        </Col>
      </Row>

      {/* Sponsors */}
      <Row className="brands-logos my-4">
        {sponsors.map((sponsor, index) => (
          <Col key={index} xs={6} md={3} className="d-flex justify-content-center align-items-center">
            <img className="brands-logos-img" src={sponsor.logo} alt={sponsor.name} />
          </Col>
        ))}
      </Row>

      {/* Product Cards */}
      <Row className="product-cards-row">
        {products.map((product, index) => (
          <Col key={index} xs={12} md={4} className="mb-4">
            <Card className="ca" onClick={() => handleCardClick(product.id)}>
              <Card.Img className="ca-img" variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description}
                  <br />
                  <strong>${product.price}</strong>
                </Card.Text>
                {/* React Stars for Rating */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Footer */}
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-heading">Shop & Discover</h3>
          <div className="footer-underline"></div>
          <ul>
            <li><a href="#">Top Gift Boxes</a></li>
            <li><a href="#">Box Insider Blog</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Browse Collections</a></li>
            <li><a href="#">Pack-e Reviews</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Popular Categories</h3>
          <div className="footer-underline"></div>
          <ul>
            <li><a href="#">Women's</a></li>
            <li><a href="#">animals</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">beauty</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Get to Know Us</h3>
          <div className="footer-underline"></div>
          <ul>
            <li><a href="#">About Pack-e</a></li>
            <li><a href="#">Sell on Pack-e</a></li>
            <li><a href="#">Cratejoy Pack-e</a></li>
            <li><a href="#">Join our Pack-e</a></li>
            <li><a href="#">Contact Pack-e</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Legal</h3>
          <div className="footer-underline"></div>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Seller Policies</a></li>
            <li><a href="#">Buyer Policies</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Follow Pack-e</h3>
          <div className="footer-underline"></div>
          <ul>
            <li><a href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faPinterest} /> Pinterest</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTiktok} /> TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Pack-e. All rights reserved.</p>
      </div>
    </Container>
  );
};

export default HomePage;
