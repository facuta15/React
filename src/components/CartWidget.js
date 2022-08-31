import { NavLink } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from "react"
import { contexto } from "./CustomProvider"


const CartWidget = ({ type }) => {


    const {cantidad} = useContext(contexto)
    return (
                <NavLink to="/cart">
                    Carrito {cantidad}
                </NavLink>
    )
}
export default CartWidget