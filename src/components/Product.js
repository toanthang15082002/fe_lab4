import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Container, Dropdown, Form, Modal, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Production() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [selectedCart, setSelectedCart] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [productID, setProductID] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:9999/products");
        setProducts(result?.data?.data);
        console.log(result?.data?.data);
      } catch (error) {
        console.log("🚀 ========= error:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const result = await axios.get("http://localhost:9999/carts");
        setCarts(result?.data?.data);

      } catch (error) {
        console.log("🚀 ========= error:", error);
      }
    };
    fetchCarts();
  }, []);

  const handleAddToCart = (productID) => {
    setProductID(productID)
    setSelectedCart("");
    setQuantity(1)
    setShowModal(true);
  };

  const handleCartSelection = (cartID) => {
    setSelectedCart(cartID);
  };

  const handleQuantityChange = (value) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  const handleAddProductToCart = async () => {
    try {
      const requestData = {
        productId: productID,
        cartId: selectedCart,
        quantity: quantity,
      };
      console.log(requestData);
      await axios.put(`http://localhost:9999/carts`, {requestData});

      setShowModal(false);
    } catch (error) {
      console.log("🚀 ========= error:", error);
    }
  };


  return (
    <Container>
      <Row>
        <Link to="/addproduct"><Button>Add Product</Button></Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Stock</th>
              <th>Brand</th>
              <th>Thumbnail</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr key={index}>
                <td>{product?._id}</td>
                <td>
                  <Link to={`/product/${product?._id}`}>{product?.name}</Link>
                </td>
                <td>{product?.description}</td>
                <td>{product?.price}</td>
                <td>{product?.discountPercentage}%</td>
                <td>{product?.stock}</td>
                <td>{product?.brand}</td>
                <td>{product?.thumbnail}</td>
                <td>{product?.images}</td>
                <td><Button onClick={() => handleAddToCart(product?._id)}>Add to cart</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="cartSelection">
              <Form.Label>Select a Cart</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="cartDropdown">
                  {selectedCart || "Select Cart"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {carts.map((cart) => (
                    <Dropdown.Item key={cart._id} onClick={() => handleCartSelection(cart._id)}>
                      {cart._id}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
            <Form.Group controlId="quantitySelection">
              <Form.Label>Quantity</Form.Label>
              <div>
                <Button
                  variant="primary"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity === 1} // Không cho phép giá trị âm
                >
                  -
                </Button>
                <span className="mx-2">{quantity}</span>
                <Button
                  variant="primary"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProductToCart}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
