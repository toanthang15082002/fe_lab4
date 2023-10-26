import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

export default function Login() {
  const [response, setResponse] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

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
      const response = await axios.post("http://localhost:9999/users/login", formData);
      console.log("Login successful. User data:", response?.data);
      setResponse(response?.data?.data)
    } catch (err) {
      console.error("Login failed:", err);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h3>Login</h3>
        {error && <p className="text-danger">{error}</p>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>
        <p>{response}</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
