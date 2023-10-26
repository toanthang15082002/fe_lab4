import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Table, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Comment() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ title: "", body: "", userId: "" });
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:9999/products/${id}/comments`);
        setComments(result.data.data);
        console.log("🚀 ========= result:", result?.data?.data);
      } catch (error) {
        console.log("🚀 ========= error:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const commentData = {
        title: newComment.title,
        body: newComment.body,
        userId: newComment.userId,
        productId: id,
      };
      const response = await axios.post("http://localhost:9999/comments", commentData);
      setComments([...comments, response.data]);
      setNewComment({ title: "", body: "", userId: "" });
    } catch (error) {
      console.error("🚀 ========= error:", error);
    }
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {comments?.map((comment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{comment?.title}</td>
              <td>{comment?.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            id="title"
            placeholder="Enter comment title"
            value={newComment.title}
            onChange={(e) => setNewComment({ ...newComment, title: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Body</Form.Label>
          <Form.Control
            type="text"
            id="body"
            placeholder="Enter comment body"
            value={newComment.body}
            onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>User Id</Form.Label>
          <Form.Control
            type="text"
            id="userId"
            placeholder="Enter userId"
            value={newComment.userId}
            onChange={(e) => setNewComment({ ...newComment, userId: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
