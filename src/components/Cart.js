import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Table } from "react-bootstrap";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:9999/carts');
        setCart(result.data.data);
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Discount Total</th>
              <th>Total Product</th>
              <th>Total Quantity</th>
              <th>Total Price</th>
              <th>User</th>
              <th>Product</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cart, index) => (
              <tr key={index}>
                <td>{cart.discountTotal}</td>
                <td>{cart.totalProduct}</td>
                <td>{cart.totalQuantity}</td>
                <td>{cart.totalPrice}</td>
                <td>{cart.user}</td>
                <td>{cart.product}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>

  );
}
