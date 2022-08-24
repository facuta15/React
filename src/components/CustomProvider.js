import { createContext, useState } from "react";

export const contexto = createContext(); //Aca va a "vivir" la data "global"
const { Provider } = contexto; //Es un componente que nos sirve para hacer "global" el valor del contexto desde su aparicion 


const CustomProvider = (props) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {

        console.log("Soy el contexto!")
        console.log(producto)
        setCantidad(cantidad + producto.cantidad)
    }

    const eliminarProducto = () => {}

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const estaEnCarrito = (id) => {
        //retrun true/false
    }
    
    const valorDelContexto = {
        cantidad: 0,
        carrito : carrito,
        agregarProducto,
        eliminarProducto,
    }

    return(
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}


export default CustomProvider;