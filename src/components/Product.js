import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Production() {
  const [products, setProducts] = useState([]);

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

  return (
    <Container>
      <Row>
      <Link to="/addproduct"><Button>Add Product</Button></Link>
        <Table striped bordered hover>
          <thead>
            <tr>
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
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
