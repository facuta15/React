import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ({ producto }) => {
  return (
    <div class="d-inline-flex p-2">
      <Card className="text-center rounded me-2">
        <Card.Header>{producto.nombre}</Card.Header>
        <Card.Body>
          <Card.Title>Precio : ${producto.precio}</Card.Title>
          <Button variant="primary" href="#detalle">
            ver detalle
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item