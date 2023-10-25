import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Table } from "react-bootstrap";

export default function Production() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:9999/products/:id');
        setProducts(result.data.data);
        console.log(result.data.data);
      } catch (error) {
        console.log('🚀 ========= error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        <p>Name: </p>
      </Row>
    </Container>

  );
}
