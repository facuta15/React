import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { useContext } from "react";
import { contexto } from "./CustomProvider";

const CartWidget = ({ type }) => {
  const { cantidad } = useContext(contexto);
  return <Nav.Link to="/cart" class= "fw-semibold">Carrito {cantidad}</Nav.Link>;
};
export default CartWidget;
