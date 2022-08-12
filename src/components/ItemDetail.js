import React from 'react'
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ details }) => {
  return (
    <div class="d-inline-flex p-2">
      <Card className="text-center rounded me-2">
        <Card.Body>
          <Card.Text>{details.detalle}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail