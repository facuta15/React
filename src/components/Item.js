import React from 'react'
import Card from 'react-bootstrap/Card';
import {LinkContainer} from 'react-router-bootstrap'



const Item = ({ producto }) => {
  return (
    <div class="d-inline-flex p-2">
      <Card className="text-center rounded me-2">
        <Card.Header>{producto.nombre}</Card.Header>
        <Card.Body>
          <Card.Title>Precio : ${producto.precio}</Card.Title>
          <LinkContainer>
                <Nav.Link to="/ItemDetail">ver detalle</Nav.Link>
          </LinkContainer>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Item