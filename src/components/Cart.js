import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:9999/carts");
      setCart(result?.data?.data);
      // console.log(result?.data?.data);
    } catch (error) {
      console.log("🚀 ========= error:", error);
    }
  };



  return (
    <Container>
      <Row>
        <Link to="/addcart"><Button>Add Cart</Button></Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Cart ID</th>
              <th>Discount Total</th>
              <th>Total Product</th>
              <th>Total Quantity</th>
              <th>Total Price</th>
              <th>User ID</th>
              <th>Product</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((cart, index) => (
              <tr key={index}>
                <td>{cart?._id}</td>
                <td>{cart?.discountTotal}</td>
                <td>{cart?.totalProduct}</td>
                <td>{cart?.totalQuantity}</td>
                <td>{cart?.totalPrice}</td>
                <td>{cart?.user}</td>
                <td>
                  {cart?.product?.map((item) => (
                    <span key={item?._id} className="mr-4">
                      {item?.name}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
