import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: '#f1e2b8',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Row className="justify-content-center text-center">
        <Col xs={12} md={6} lg={4}>
          <h1 style={{ fontSize: '5rem', color: '#d9534f' }}>404</h1>
          <p style={{ fontSize: '1.5rem', color: '#721c24' }}>
            Oops! The page you’re looking for doesn’t exist.
          </p>

          <Image
            src="https://c8.alamy.com/comp/MNF0YR/404-error-page-not-found-MNF0YR.jpg" 
            alt="404 Image"
            fluid
            rounded
            className="mb-4"
          />


          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <Button variant="danger" size="lg">
              Go to Homepage
            </Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;