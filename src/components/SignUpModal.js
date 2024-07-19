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

