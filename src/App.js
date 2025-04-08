import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './styles/App.css';
import CodeGenerator from './components/CodeGenerator';
import TokenInfo from './components/TokenInfo';
import Header from './components/Header';

function App() {
  const [userCredits, setUserCredits] = useState(100);

  const useCredits = (amount) => {
    setUserCredits(prev => Math.max(0, prev - amount));
  };

  return (
    <div className="app">
      <Header />
      <Container className="mt-4">
        <Row>
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Body>
                <CodeGenerator useCredits={useCredits} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <TokenInfo credits={userCredits} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App; 