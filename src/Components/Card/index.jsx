import React from 'react';
import { Card } from 'react-bootstrap';

export default function index({ children }) {
  return (
    <Card>

      <Card.Body>
        {children}
      </Card.Body>
    </Card>
  );
}
