// CartModal.js
import React, { useState } from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

const CartModal = ({ show, handleClose }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Beauty Box", price: 29.99 },
    { id: 2, name: "Hello Fresh Food", price: 39.99 }
  ]);

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {cartItems.map(item => (
            <ListGroup.Item key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
