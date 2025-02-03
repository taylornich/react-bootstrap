import React from 'react';
import { Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import welcomeImage from './assets/welcome-image.jpg';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

//Added this so that the NotFound page could be accessed through the Home page for question 1 :)
  const navigate = useNavigate();

  const goToNotFound = () => {
    navigate('/notfound');

  }
  return (
    <Container 
      fluid 
      style={{
        backgroundColor: '#f8d7da', 
        minHeight: '100vh',
        border: '5px solid #ff69b4',
        borderRadius: '10px',
        padding: '20px'
      }}
    >
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Image 
            src={welcomeImage} 
            alt="Welcome" 
            fluid 
            rounded 
            className="mb-4"
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h1 className="text-light mb-4">Welcome to Our Store!</h1>
          <Button 
            variant='primary'
            style={{ backgroundColor: '#9b59b6', borderColor: '#9b59b6' }}
            size="lg" 
            className="shadow-lg"
          >
            Shop Now
          </Button>
        </Col>
      </Row>


      <Row className="justify-content-center mt-5">
        <Col md={4}>
          <Card className="shadow-lg border-light rounded">
            <Card.Body>
              <Card.Title className="text-primary">Featured Product</Card.Title>
              <Card.Text className="text-dark">
                Check out our products!
              </Card.Text>
              <Button variant="light" onClick={goToNotFound}>Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-lg border-light rounded">
            <Card.Body>
              <Card.Title className="text-primary">Exclusive Deals</Card.Title>
              <Card.Text className="text-dark">
                Don't miss out on limited-time offers!
              </Card.Text>
              <Button variant="light" onClick={goToNotFound}>Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;