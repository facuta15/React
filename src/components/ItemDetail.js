import React from "react";
import Card from "react-bootstrap/Card";
import Contador from "./Contador";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CustomProvider";
import { Button } from "react-bootstrap";

const ItemDetail = ({ item }) => {
  const { agregarProducto } = useContext(contexto);
  const [estadoPadre, setEstadoPadre] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  const onAdd = () => {
    item.cantidad = estadoPadre;
    agregarProducto(item, estadoPadre);
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <Card className="col-3" style={{ minwidth: "10rem" }}>
        <Card.Img className="h-75" src={item.image} />
        <Card.Body>
          <Card.Title className="text-center">{item.nombre}</Card.Title>
          <Card.Text className="text-center">Precio : ${item.precio}</Card.Text>
        </Card.Body>
        <Card.Text className="text-center">{item.detail}</Card.Text>
        <Card.Footer>
          <p className="text-center">Cantidad: {estadoPadre}</p>
          <Contador
            estadoPadre={estadoPadre}
            setEstadoPadre={setEstadoPadre}
            onAdd={onAdd}
          />
          <Link to="/cart/">
            <div className="d-grid gap-2 pt-3">
              <Button variant="success" size="lg">
                Finalizar compra!
              </Button>
            </div>
          </Link>
        </Card.Footer>
      </Card>
    );
  } else {
    return (
      <Card className="col-3" style={{ minwidth: "10rem" }}>
        <Card.Img className="h-75" src={item.image} />
        <Card.Body>
          <Card.Title className="text-center">{item.nombre}</Card.Title>
          <Card.Text className="text-center">Precio : ${item.precio}</Card.Text>
        </Card.Body>
        <Card.Text className="text-center">{item.detail}</Card.Text>
        <Card.Footer>
          <p className="text-center">Cantidad: {estadoPadre}</p>
          <Contador
            estadoPadre={estadoPadre}
            setEstadoPadre={setEstadoPadre}
            onAdd={onAdd}
          />
        </Card.Footer>
      </Card>
    );
  }
};
export default ItemDetail;
