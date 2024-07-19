now i'm going to give uou every files i had and i want just to change it to flexible with tablets or smartphones first than i need you to fix the navbar and change the shopping kard logo to w better one 

folder components :
Navbar.js: 

import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import logo from '../assets/whitelogo.png'; // Adjust the path as needed
import SignUpModal from './SignUpModal';
import SignInModal from './SignInModal';
import './NavigationBar.css'; // Import the CSS file

const NavigationBar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSeller, setShowSeller] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);
  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);
  const handleCloseSeller = () => setShowSeller(false);
  const handleShowSeller = () => setShowSeller(true);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCategories = () => setCategoriesOpen(!categoriesOpen);

  return (
    <>
      <Navbar className="navnavnav" expand="lg">
      <div className={hamburger-container ${menuOpen ? 'change' : ''}} onClick={toggleMenu}>
        </div>
        <div className={categories-hamburger ${categoriesOpen ? 'change' : ''}} onClick={toggleCategories}>
          
        </div>
        <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? 'show' : ''}>
          <Nav className="mr-auto">
            <NavDropdown title="categories" id="categories-dropdown" className={categories-dropdown ${categoriesOpen ? 'show' : ''}}>
              <NavDropdown.Item href="#category1">Category 1</NavDropdown.Item>
              <NavDropdown.Item href="#category2">Category 2</NavDropdown.Item>
              <NavDropdown.Item href="#category3">Category 3</NavDropdown.Item>
            </NavDropdown>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="E-commerce Logo"
            className="navbar-logo" // Use className for styling
          />
        </Navbar.Brand>
        
            <Form inline className="mx-auto">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/products">Shop</Nav.Link>
            <NavDropdown title="Account" id="account-dropdown">
              <NavDropdown.Item onClick={handleShowSignIn}>Sign In</NavDropdown.Item>
              <NavDropdown.Item onClick={handleShowSignUp}>Sign Up</NavDropdown.Item>
              <NavDropdown.Item onClick={handleShowSeller}>Become a Seller</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <FaShoppingCart onClick={handleShowCart} style={{ cursor: 'pointer' }} />
        </Navbar.Collapse>
      </Navbar>

      {/* Sign In Modal */}
      <SignInModal show={showSignIn} handleClose={handleCloseSignIn} />

      {/* Sign Up Modal */}
      <SignUpModal show={showSignUp} handleClose={handleCloseSignUp} />

      {/* Become a Seller Modal */}
      <SignUpModal show={showSeller} handleClose={handleCloseSeller} />
    </>
  );
};

export default NavigationBar;

navigationbar.css : 
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");

* {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

.navnavnav {
  padding: 5px 5%;
  display: flex;
  justify-content: space-between;
  align-items:flex-start;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  z-index: 1;
  background-color: rgb(227, 228, 201);
}

.navbar-logo {
  height: 25px;
  width: auto;
  margin-right: 10px;
}

.hamburger-container, .categories-hamburger {
  display: inline-block;
  cursor: pointer;
}

.hamburger-container .bar1,
.hamburger-container .bar2,
.hamburger-container .bar3 {
    width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
}

@media screen and (max-width: 790px) {
  .hamburger-container, .categories-hamburger {
    display: block;
  }

  .navbar-collapse {
    display: none;
  }

  .navbar-collapse.show {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    padding-top: 60px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .navbar-collapse .nav-link {
    padding: 10px 15px;
    width: 100%;
    display: block;
    text-align: center;
  }

  .categories-dropdown {
    display: none;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background-color: rgb(151, 6, 6);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .categories-dropdown.show {
    display: block;
  }

  .categories-dropdown .nav-dropdown-item {
    padding: 10px 15px;
    width: 100%;
    display: block;
    text-align: center;
  }
}


  signinmodal.css : 
@import url(https://fonts.googleapis.com/css?family=Roboto);

.loginmodal-cont{
   
    max-width: 400px;
    max-height: 100vh;
    margin: 60px 600px;
  }

.loginmodal-container {
  padding: 35px;
  max-width: 400px;
  width: 100% !important;
  background-color: #F7F7F7;
  margin: 0 auto;
  border-radius: 13px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  font-family: roboto;
}

.loginmodal {
  text-align: center;
  font-size: 14px;
  font-family: 'Arial', sans-serif;
  font-weight: 700;
  height: 36px;
  padding: 0 8px;
}

.loginmodal-container h1 {
  text-align: center;
  font-size: 1.8em;
  font-family: roboto;
}

.loginmodal-container input[type=submit] {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  position: relative;
}

.loginmodal-container input[type=email],
input[type=password],
input[type=text] {
  height: 44px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
  -webkit-appearance: none;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-top: 1px solid #c0c0c0;
  padding: 0 8px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}

.loginmodal-container input[type=email]:hover,
input[type=password]:hover,
input[type=text]:hover {
  border: 1px solid #b9b9b9;
  border-top: 1px solid #a0a0a0;
  -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.loginmodal-submit {
  border: 0px;
  color: #fff;
  text-shadow: 0 1px rgba(0, 0, 0, 0.1);
  background-color: #4d90fe;
  padding: 17px 0px;
  font-family: roboto;
  font-size: 14px;
}

.loginmodal-submit:hover {
  border: 0px;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  background-color: #357ae8;
}

.loginmodal-container a {
  text-decoration: none;
  color: #666;
  font-weight: 400;
  text-align: center;
  display: inline-block;
  opacity: 0.6;
  transition: opacity ease 0.5s;
}

.login-help {
  font-size: 12px;
}

.login-btn {
  text-align: center;
  margin-top: 50px;
}

.button {
  line-height: 55px;
  padding: 0 30px;
  background: #004a80;
  color: #fff;
  display: inline-block;
  font-family: roboto;
  text-decoration: none;
  font-size: 18px;
}

.button:hover,
.button:visited {
  background: #006cba;
  color: #fff;
}

.login-icon {
  margin: 0 10px;
  cursor: pointer;
}


signin modal.js: 
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import './SignInModal.css'; // Make sure to import the CSS file

const SignInModal = ({ show, handleClose }) => {
  return (
    <Modal className="loginmodal-cont" show={show} onHide={handleClose}>
      <div className="loginmodal-container">
        <Modal.Header closeButton>
          <Modal.Title className="loginmodal">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-3">
            <FaFacebook size={35} className="login-icon" />
            <FaGoogle size={35} className="login-icon" />
          </div>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className="login-input" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" className="login-input" />
            </Form.Group>
            <Button type="submit" block className="loginmodal-submit">
              Sign In
            </Button>
          </Form>
          <div className="login-help mt-3 text-center">
            <a href="#">Forgot password?</a>
          </div>
          <div className="login-help mt-3 text-center">
            Sign in with another account
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default SignInModal;

signupmodal.css :
@import url(https://fonts.googleapis.com/css?family=Roboto);


.supmodal{
   
    max-width: 400px;
    max-height: 1000vh;
    margin: 10px 600px;
  }
.loginmodal-container {
    padding: 35px;
    max-width: 400px;
    width: 100% !important;
    background-color: #F7F7F7;
    margin: 0 auto;
    border-radius: 13px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    font-family: roboto;
}

.loginmodal {
  text-align: center;
  font-size: 14px;
  font-family: 'Arial', sans-serif;
  font-weight: 700;
  height: 36px;
  padding: 0 8px;
}

.loginmodal-container h1 {
  text-align: center;
  font-size: 1.8em;
  font-family: roboto;
}

.loginmodal-container input[type=submit] {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  position: relative;
}

.loginmodal-container input[type=email],
input[type=password],
input[type=text] {
  height: 44px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
  -webkit-appearance: none;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-top: 1px solid #c0c0c0;
  padding: 0 8px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}

.loginmodal-container input[type=email]:hover,
input[type=password]:hover,
input[type=text]:hover {
  border: 1px solid #b9b9b9;
  border-top: 1px solid #a0a0a0;
  -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.loginmodal-submit {
  border: 0px;
  color: #fff;
  text-shadow: 0 1px rgba(0, 0, 0, 0.1);
  background-color: #4d90fe;
  padding: 17px 0px;
  font-family: roboto;
  font-size: 14px;
}

.loginmodal-submit:hover {
  border: 0px;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  background-color: #357ae8;
}

.loginmodal-container a {
  text-decoration: none;
  color: #666;
  font-weight: 400;
  text-align: center;
  display: inline-block;
  opacity: 0.6;
  transition: opacity ease 0.5s;
}

.login-help {
  font-size: 12px;
}

.login-btn {
  text-align: center;
  margin-top: 50px;
}

.button {
  line-height: 55px;
  padding: 0 30px;
  background: #004a80;
  color: #fff;
  display: inline-block;
  font-family: roboto;
  text-decoration: none;
  font-size: 18px;
}

.button:hover,
.button:visited {
  background: #006cba;
  color: #fff;
}

.login-icon {
  margin: 0 10px;
  cursor: pointer;
}
signupmodal.js :
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import './SignUpModal.css'; // Make sure to import the CSS file

const SignUpModal = ({ show, handleClose }) => {
  return (
    <Modal className="supmodal" show={show} onHide={handleClose}>
      <div className="loginmodal-container">
        <Modal.Header closeButton>
          <Modal.Title className="loginmodal">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-3">
            <FaFacebook size={30} className="login-icon" />
            <FaGoogle size={30} className="login-icon" />
          </div>
          <Form>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" className="login-input" />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" className="login-input" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className="login-input" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" className="login-input" />
            </Form.Group>
            <Button type="submit" block className="loginmodal-submit">
              Create Account
            </Button>
          </Form>
          <div className="login-help mt-3 text-center">
            By registering, you agree to our Terms of Use, Privacy Policy, and to receive emails that you can unsubscribe from at any time.
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default SignUpModal;

folder pages: 
sponsors.js :
const sponsors = [
  { name: "Sponsor 1", logo: require('../assets/spon1.png') },
  { name: "Sponsor 2", logo: require('../assets/spon2.png') },
  { name: "Sponsor 3", logo: require('../assets/spon3.png') },
  { name: "Sponsor 4", logo: require('../assets/spon4.png') },
  { name: "Sponsor 5", logo: require('../assets/spon5.png') },
  { name: "Sponsor 6", logo: require('../assets/spon6.png') },
  { name: "Sponsor 7", logo: require('../assets/spon7.png') },
  { name: "Sponsor 8", logo: require('../assets/spon8.png') },
  
];
  
  export default sponsors; 

products.js : 

import image1 from '../assets/112.jpg'
import image2 from '../assets/123.jpg'
import image3 from '../assets/123.jpg'

const products = [
  {
    id: 1,
    name: "Beauty box ",
    description: "Gourmet Chocolates ,Premium Wine or Champagne ,Scented Candle ...",
    price: 29.99,
    rating: 4,
    image: image1,
    images: [image1, image1, image1, image1, image1, image1],
    longDescription:"Experience the pinnacle of performance and design with the ProMaster XZ5000 Ultra Laptop. Engineered for professionals, gamers, and creators alike, this state-of-the-art device merges unparalleled speed, expansive storage, and stunning visuals in a sleek, lightweight chassis. Whether you're tackling complex data analyses, rendering high-resolution videos, or diving into the latest AAA games, the XZ5000 ensures you operate at the peak of your potential."
  },

  {
    id: 2,
    name: "Hello Fresh Food",
    description: "Gourmet Chocolates ,Premium Wine or Champagne ,Scented Candle ...",
    price: 39.99,
    rating: 5,
    image: image2,
    images: [image2, image2, image2, image2, image2, image2],
    longDescription:"Experience the pinnacle of performance and design with the ProMaster XZ5000 Ultra Laptop. Engineered for professionals, gamers, and creators alike, this state-of-the-art device merges unparalleled speed, expansive storage, and stunning visuals in a sleek, lightweight chassis. Whether you're tackling complex data analyses, rendering high-resolution videos, or diving into the latest AAA games, the XZ5000 ensures you operate at the peak of your potential."
  }, 

   {
    id: 3,
    name: "Beauty box ",
    description: "Gourmet Chocolates ,Premium Wine or Champagne ,Scented Candle ...",
    price: 29.99,
    rating: 4,
    image: image1,
    images: [image1, image1, image1, image1, image1, image1],
    longDescription:"Experience the pinnacle of performance and design with the ProMaster XZ5000 Ultra Laptop. Engineered for professionals, gamers, and creators alike, this state-of-the-art device merges unparalleled speed, expansive storage, and stunning visuals in a sleek, lightweight chassis. Whether you're tackling complex data analyses, rendering high-resolution videos, or diving into the latest AAA games, the XZ5000 ensures you operate at the peak of your potential."
  }, 

  {
    id: 4,
    name: "Hello Fresh Food",
    description: "Gourmet Chocolates ,Premium Wine or Champagne ,Scented Candle ...",
    price: 39.99,
    rating: 5,
    image: image3,
    images: [image3, image3, image3, image3, image3, image3],
    longDescription:"Experience the pinnacle of performance and design with the ProMaster XZ5000 Ultra Laptop. Engineered for professionals, gamers, and creators alike, this state-of-the-art device merges unparalleled speed, expansive storage, and stunning visuals in a sleek, lightweight chassis. Whether you're tackling complex data analyses, rendering high-resolution videos, or diving into the latest AAA games, the XZ5000 ensures you operate at the peak of your potential."
  }, 

   {
    id: 5,
    name: "Beauty box ",
    description: "Gourmet Chocolates ,Premium Wine or Champagne ,Scented Candle ...",
    price: 29.99,
    rating: 4,
    image: image1,
    images: [image1, image1, image1, image1, image1, image1],
    longDescription:"Experience the pinnacle of performance and design with the ProMaster XZ5000 Ultra Laptop. Engineered for professionals, gamers, and creators alike, this state-of-the-art device merges unparalleled speed, expansive storage, and stunning visuals in a sleek, lightweight chassis. Whether you're tackling complex data analyses, rendering high-resolution videos, or diving into the latest AAA games, the XZ5000 ensures you operate at the peak of your potential."
  }, 

  {
    id: 6,
    name: "Hello Fresh Food",
    description: "Gourmet Chocolates ,Premium Wine or Champagne ,Scented Candle ...",
    price: 39.99,
    rating: 5,
    image: image2,
    images: [image2, image2, image2, image2, image2, image2],
    longDescription:"Experience the pinnacle of performance and design with the ProMaster XZ5000 Ultra Laptop. Engineered for professionals, gamers, and creators alike, this state-of-the-art device merges unparalleled speed, expansive storage, and stunning visuals in a sleek, lightweight chassis. Whether you're tackling complex data analyses, rendering high-resolution videos, or diving into the latest AAA games, the XZ5000 ensures you operate at the peak of your potential."
  }, 

   {
    id: 7,
    name: "Beauty box ",
    description: "Gourmet Chocolates ,Premium Wine or Champagne ,Scented Candle ...",
    price: 29.99,
    rating: 4,
    image: image3,
    images: [image3, image3, image3, image3, image3, image3],
    longDescription:"Experience the pinnacle of performance and design with the ProMaster XZ5000 Ultra Laptop. Engineered for professionals, gamers, and creators alike, this state-of-the-art device merges unparalleled speed, expansive storage, and stunning visuals in a sleek, lightweight chassis. Whether you're tackling complex data analyses, rendering high-resolution videos, or diving into the latest AAA games, the XZ5000 ensures you operate at the peak of your potential."
  }, 

  {
    id: 8,
    name: "Hello Fresh Food",
    description: "Gourmet Chocolates ,Premium Wine or Champagne ,Scented Candle ...",
    price: 39.99,
    rating: 5,
    image: image2,
    images: [image1, image2, image1, image3, image2, image2],
    longDescription:"Experience the pinnacle of performance and design with the ProMaster XZ5000 Ultra Laptop. Engineered for professionals, gamers, and creators alike, this state-of-the-art device merges unparalleled speed, expansive storage, and stunning visuals in a sleek, lightweight chassis. Whether you're tackling complex data analyses, rendering high-resolution videos, or diving into the latest AAA games, the XZ5000 ensures you operate at the peak of your potential."
  }, 

   {
    id: 9,
    name: "Beauty box ",
    description: "Gourmet Chocolates ,Premium Wine or Champagne ,Scented Candle ...",
    price: 29.99,
    rating: 4,
    image: image1,
    images: [image1, image2, image1, image2, image3, image1],
    longDescription:"Experience the pinnacle of performance and design with the ProMaster XZ5000 Ultra Laptop. Engineered for professionals, gamers, and creators alike, this state-of-the-art device merges unparalleled speed, expansive storage, and stunning visuals in a sleek, lightweight chassis. Whether you're tackling complex data analyses, rendering high-resolution videos, or diving into the latest AAA games, the XZ5000 ensures you operate at the peak of your potential."
  },
  // Add more products as needed
];

export default products;

productlistingpage.js :
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import products from './products';
import ReactStars from 'react-stars';
import { useNavigate } from "react-router-dom";
import './ProductListingPage.css'; // Import the CSS file

const ProductListingPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(/products/${id});
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

productslistingpage.css  :
/* Container for the entire product listing page */
.container {
    padding: 20px;
}

/* Card styling */
.card {
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-img-top {
    height: 200px; /* Adjust height as needed */
    object-fit: cover;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
}

/* Card body styling */
.card-body {
    text-align: center;
}

.card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.card-text {
    margin-bottom: 10px;
}

.card-text strong {
    font-size: 1.1rem;
    color: #333;
}

/* Button styling */
button {
    background: none;
    border: none;
    color: #ff0000;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.2s;
}

button:hover {
    color: #ff6666;
}

ProductDetailPage.js :
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
                alt={Thumbnail ${index}}
                className={thumbnail ${index === currentIndex ? 'active' : ''}}
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


ProductDetailPage.css  :
/* Product View */
.product-view .product-name {
    font-size: 24px;
    color: #2874f0;
}
.product-view .label-stock {
    font-size: 13px;
    padding: 4px 13px;
    border-radius: 5px;
    color: #fff;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
    float: right;
}
.product-view .product-path {
    font-size: 13px;
    font-weight: 500;
    color: #252525;
    margin-bottom: 16px;
}
.product-view .selling-price {
    font-size: 26px;
    color: #000;
    font-weight: 600;
    margin-right: 8px;
}
.product-view .original-price {
    font-size: 18px;
    color: #937979;
    font-weight: 400;
    text-decoration: line-through;
}
.product-view .btn1 {
    border: 1px solid;
    margin-right: 3px;
    border-radius: 0px;
    font-size: 14px;
    margin-top: 10px;
    cursor: pointer;
}
.product-view .btn1:hover {
    background-color: #2874f0;
    color: #fff;
}
.product-view .input-quantity {
    border: 1px solid #000;
    margin-right: 3px;
    font-size: 12px;
    margin-top: 10px;
    width: 58px;
    outline: none;
    text-align: center;
}
/* Product View */
/* Reset default browser styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
  }
  
  .bg-white {
    position: relative;
  }
  
  .caption {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
  }
  
  .navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  
  .nav-button {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #000;
  }
  
  .thumbnail-container {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .thumbnail {
    width: 60px;
    height: 40px;
    margin: 0 5px;
    cursor: pointer;
    opacity: 0.6;
    border: 2px solid transparent;
  }
  
  .thumbnail.active {
    opacity: 1;
    border-color: #007bff;
  }
  
  .thumbnail:hover {
    opacity: 1;
  }
  

HomePage.js :
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
    navigate(/products/${id});
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
HomePage.css :
.homepage-container {
    padding: 0;
}

.homepage-title {
    font-weight: bold;
    font-size: 24px;
}

.carousel-container {
    max-height: 500px; /* Set the desired height for the carousel */
    overflow: hidden;
    border-radius: 15px;
}

.carousel-container img {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
}

.brands-logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.brands-logos-img {
    max-width: 100px; /* Adjust as needed */
    height: auto;
}

.footer-area {
    padding: 40px 0px;
    background-color: #f5f4f0;
    color: #000000;
}

.footer-area a {
    text-decoration: none;
    color: #000000;
}

.footer-area .footer-heading {
    font-size: 24px;
    color: #000000;
}

.footer-column .footer-underline {
    height: 1px;
    width: 70px;
    background-color: #000000;
    margin: 10px 0px;
}

.copyright-area {
    padding: 14px 0px;
    background-color: #000000;
}

.copyright-area p {
    margin-bottom: 0px;
    color: #000000;
}
.mb-2 {
    color: #000000;
}
.copyright-area .social-media {
    text-align: end;
}

.copyright-area .social-media a {
    margin: 0px 10px;
    color: #000000;
    width: 20px;
}

.ca {
    width: 24rem;  /* Fixed width */
    height: 400px; /* Fixed height */
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    justify-content: space-between;
    justify-content: center;
    position: relative;
    flex: auto;
    list-style: none;
    margin: 0;
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 60px;
    transition: transform .2s;
}
.ca:hover {
    transform: scale(1.05); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }

.ca-img {
    width: 100%; /* Make the image width responsive */
    height: 45vh;        /* 45% of the viewport height */
    max-height: 400px;   /* Maximum height */
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

footer {
  background-color: #f8f8f8;
  padding: 20px 0;
  font-family: Arial, sans-serif;
  margin: 0 100px;
}

.footer-container {
  display: flex;
  justify-content: space-around;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 40px 150px;
}

.footer-column {
  flex: 1;
  min-width: 200px;
  margin: 10px;
}

.footer-column h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 8px;
}

.footer-column ul li a {
  text-decoration: none;
  font-size: 15px;
  color: #333;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.footer-column ul li a:hover {
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #777;
}

.footer-heading {
    font-family: monospace;
}

.fa {
    margin-right: 8px;
}
DashboardPage.js :
import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap'; // Import ProgressBar here
import { Line, Bar } from 'react-chartjs-2';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'chart.js/auto'; // Ensure that chart.js is correctly imported
import './DashboardPage.css'; // Import the CSS file

const DashboardPage = () => {
  // Sample data for the line chart
  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Earnings',
        data: [1200, 1900, 3000, 5000, 2000, 3000],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const lineOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Sample data for the bar chart
  const barData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Weekly Sales',
        data: [120, 190, 300, 500, 200, 300, 400],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Container className="mt-4">
      <h2>Seller Dashboard</h2>
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header className="card-header">Earnings Over Time</Card.Header>
            <Card.Body>
              <Line data={lineData} options={lineOptions} />
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header className="card-header">Weekly Sales</Card.Header>
            <Card.Body>
              <Bar data={barData} options={barOptions} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header className="card-header">Total Earnings</Card.Header>
            <Card.Body>
              <h3>15,000DT</h3>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header className="card-header">Total Orders</Card.Header>
            <Card.Body>
              <CircularProgressbar value={58.4} text={${58.4}DT} />
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header className="card-header">Market Share</Card.Header>
            <Card.Body>
              <CircularProgressbar value={26} text={26M} />
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header className="card-header">Weather</Card.Header>
            <Card.Body>
              <h4>Tunisia</h4>
              <p>31°C, Sunny</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header className="card-header">Trending Pack-e</Card.Header>
            <Card.Body>
              <ul>
                <li>Pack-e #25698 - <ProgressBar now={88} label="88%" /></li>
                <li>Pack-e #54125 - <ProgressBar now={79} label="79%" /></li>
                <li>Pack-e #85236 - <ProgressBar now={90} label="90%" /></li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header className="card-header">Storage</Card.Header>
            <Card.Body>
              <ProgressBar now={85} label="85%" />
              <p>Using 850 U of 1000 U</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header className="card-header">Recent Activities</Card.Header>
            <Card.Body>
              <ul>
                <li>Pack-e #41258 - 3 sold </li>
                <li>Pack-e #58426 - out of stock</li>
                <li>Pack-e #78412 - 3 cancelled</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Header className="card-header">Top Products</Card.Header>
            <Card.Body>
              <ul>
                <li>Pack-e #41258 - 125DT</li>
                <li>Pack-e #97412 - 89DT</li>
                <li>Pack-e #65239 - 200DT</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;

DashboardPage.css :
/* General styles for the dashboard */
.container {
    max-width: 1200px;
    margin: 0 auto;
}
.card-header {
    font-weight: bold;
    color: #000cba; /* Change the text color to blue */
    background-color: #f0f8ff; /* Optional: change the background color if needed */
}

.card-body {
    padding: 20px;
}


h2 {
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    margin-bottom: 10px;
    font-weight: bold;
}

.progress-bar {
    margin-bottom: 0px;
}
.mb-4{
    transition: transform .2s; /* Animation */
}
.mb-4:hover {
    transform: scale(1.05); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }

App.js :
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import DashboardPage from './pages/DashboardPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;

and App.css is empty