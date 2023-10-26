import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:9999/users');
        setUsers(result.data.data);
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
      <Link to="/adduser"><Button>Add User</Button></Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td><Link to={`/cart/${user?._id}`}>{user?.username}</Link></td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
