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

