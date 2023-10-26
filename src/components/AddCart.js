import axios from "axios";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Form, Button } from "react-bootstrap";

export default function AddCart() {
  const [formData, setFormData] = useState({
    userid: "", // Khởi tạo trường userid
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:9999/carts", {
        userId: formData.userid, // Lấy giá trị từ form
      });
      console.log("🚀 ========= result:", result?.data?.data);
    } catch (error) {
      console.log("🚀 ========= error:", error);
    }
  };

  return (
    <Container>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="userid">
            <Form.Label>User ID</Form.Label>
            <Form.Control
              type="text"
              name="userid"
              value={formData.userid} // Hiển thị giá trị từ state
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
