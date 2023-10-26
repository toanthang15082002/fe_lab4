import axios from "axios";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Form, Button } from "react-bootstrap";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    stock: 0,
    brand: "",
    thumbnail: "",
    // image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if ((name === "price" || name === "discountPercentage" || name === "stock") && value < 0) {
      return; // Nếu giá trị âm, không cập nhật state
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:9999/products", formData);
      console.log("🚀 ========= result:", result?.data?.data);
    } catch (error) {
      console.log("🚀 ========= error:", error);
    }
  };

  return (
    <Container>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="discountPercentage">
            <Form.Label>Discount Percentage</Form.Label>
            <Form.Control
              type="number"
              name="discountPercentage"
              value={formData.discountPercentage}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="stock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="thumbnail">
            <Form.Label>Thumbnail (Image URL)</Form.Label>
            <Form.Control
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
            />
          </Form.Group>
          {/* <Form.Group controlId="image">
            <Form.Label>Image (Image URL)</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
