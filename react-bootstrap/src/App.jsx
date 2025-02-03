import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './home';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <Container fluid>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
