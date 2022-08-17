import React from 'react'
import Card from 'react-bootstrap/Card';

const ItemDetail = ({item}) => {

  return (
    <div class="d-inline-flex p-2">
      <Card className="text-center rounded me-2">
        <Card.Header>{item.nombre}</Card.Header>
        <Card.Body>
          <Card.Title>Precio : ${item.precio}</Card.Title>
          <Card.Text>
            {item.detail}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ItemDetail