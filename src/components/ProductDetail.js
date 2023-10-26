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
      <p>Description: {products?.description}</p>
      <p>Price: {products?.price}</p>
      <p>Discount: {products?.discountPercentage}%</p>
      <p>Stock: {products?.stock}</p>
      <p>Brand: {products?.brand}</p>
      <p>Thumbnail: {products?.thumbnail}</p>
      <p>Image: {products?.images}</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.comment?.map((comment, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{comment?.title}</td>
              <td>{comment?.body}</td>
              <td>Delete Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form>
        <div className="form-group">
          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            className="form-control"
            id="comment"
            placeholder="Enter comment"
          />
        </div>
        <div className="form-group">
          <label htmlFor="userId">User Id</label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter userId"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Container>
  );
}
