import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function AddProduct() {
  const [production, setProduction] = useState();
  const { id } = useParams();

  useEffect(() => {
    try {
      if (id) {
        const result = axios({
          method: "post",
          url: `http://localhost:9999/product/add`,
        });
        console.log(production);
        setProduction(result.data.data);
        return result;
      }
    } catch (error) {
      console.log("🚀 ========= error:", error);
    }
  });
  return (
    <div>
      <div className="h-25 bg-info">
        <Link className="text-decoration-none text-bg-warning ms-5" to="/">
          Home
        </Link>
      </div>
      <div className="container">
        <h1 className="text-center">Create a new Product</h1>
        <form className="container">
          <div className="row">
            <div className="col-6">
              <label>ID</label>
              <input name="id" className="form-control" />
            </div>
            <div className="col-6">
              <label>Title</label>
              <input name="title" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Price</label>
              <input name="price" className="form-control" />
            </div>
            <div className="col-6">
              <label>Discount</label>
              <input name="discount" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Rating</label>
              <input name="rating" className="form-control" />
            </div>
            <div className="col-6">
              <label>Stock</label>
              <input name="stock" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label>Brand</label>
              <input name="brand" className="form-control" />
            </div>
            <div className="col-6">
              <label>Category</label>
              <input name="category" className="form-control" />
            </div>
            <div className="col-12">
              <label>Description</label>
              <textarea className="form-control" />
            </div>

            <div className="d-flex justify-content-center">
              <button className="btn btn-primary">Add</button>
              <button className="btn btn-danger">Back to Home</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
