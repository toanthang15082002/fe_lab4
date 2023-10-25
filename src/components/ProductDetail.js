import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  console.log("🚀 ========= id:", id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:9999/products/${id}`);
        setProducts(result.data.data);
        console.log("🚀 ========= result:", result?.data?.data);
      } catch (error) {
        console.log("🚀 ========= error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <p>Name: {products?.name}</p>
      <p>Name: {products?.name}</p>
      <p>Name: {products?.name}</p>
      <p>Name: {products?.name}</p>
      <p>Name: {products?.name}</p>
      <p>Name: {products?.name}</p>
      {products?.comment?.map((item, index) => (
        <p key={index}>Name: {item?.title}</p>
      ))}
    </Container>
  );
}
