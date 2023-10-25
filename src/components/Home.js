import React from 'react';
import {Button, Container, Row} from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Row>
        <Button href='/user'>Users</Button>
      </Row>
    </Container>
  );
}
