// NavigationBar.js
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import logo from '../assets/whitelogo.png'; // Adjust the path as needed
import SignUpModal from './SignUpModal';
import SignInModal from './SignInModal';
import CartModal from './CartModal'; // Import the CartModal component
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
        <Navbar.Brand href="/">
          <img src={logo} alt="E-commerce Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu}>
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? 'show' : ''}>
          <Nav className="mr-auto">
            <NavDropdown title="Categories" id="categories-dropdown" className={categoriesOpen ? 'show' : ''}>
              <NavDropdown.Item href="#category1">Category 1</NavDropdown.Item>
              <NavDropdown.Item href="#category2">Category 2</NavDropdown.Item>
              <NavDropdown.Item href="#category3">Category 3</NavDropdown.Item>
            </NavDropdown>
            <Form inline className="mx-auto">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/products">Shop</Nav.Link>
            <NavDropdown title="Account" id="account-dropdown">
              <NavDropdown.Item onClick={handleShowSignIn}>Sign In</NavDropdown.Item>
              <NavDropdown.Item onClick={handleShowSignUp}>Sign Up</NavDropdown.Item>
              <NavDropdown.Item onClick={handleShowSeller}>Become a Seller</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={handleShowCart}>
              <FaShoppingCart style={{ cursor: 'pointer' }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Sign In Modal */}
      <SignInModal show={showSignIn} handleClose={handleCloseSignIn} />

      {/* Sign Up Modal */}
      <SignUpModal show={showSignUp} handleClose={handleCloseSignUp} />

      {/* Become a Seller Modal */}
      <SignUpModal show={showSeller} handleClose={handleCloseSeller} />

      {/* Shopping Cart Modal */}
      <CartModal show={showCart} handleClose={handleCloseCart} />
    </>
  );
};

export default NavigationBar;
