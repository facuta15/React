import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react"
import { contexto } from "./CustomProvider"


const CartWidget = ({ type }) => {


    const {cantidad} = useContext(contexto)
    
    return (
                <NavLink to="/cart">
                    {/* <FontAwesomeIcon icon="faShoppingCart" /> esto no anda */}
                    Carrito{cantidad}
                </NavLink>
    )
}
export default CartWidget