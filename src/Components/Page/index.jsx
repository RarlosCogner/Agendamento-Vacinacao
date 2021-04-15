import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default function Page({ children, mainTitle }) {
  return (
    <div>
      <Container className="mt-4" fluid="md">
        <Card>
          <Card.Title className="ml-4 mt-1">
            <h1>
              {' '}
              {mainTitle}
              {' '}
            </h1>
          </Card.Title>
          <Card.Body>
            {children}
          </Card.Body>

        </Card>
      </Container>

    </div>
  );
}
