import { createContext, useState,useContext } from "react";

export const contexto = createContext(); 
const { Provider } = contexto; 

export const useCarrito = () => {
    const valor_del_contexto = useContext(contexto)
    return valor_del_contexto
}

const CustomProvider = (props) => {

    let carritoAux=[]
    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {
        setCantidad(cantidad + producto.cantidad)
        carritoAux.push(producto)
        setCarrito(carritoAux)
    }

    const eliminarProducto = (id) => {
        const searchObject= carrito.findIndex((item) => item.id==id);
        carrito.splice(searchObject,1);
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const estaEnCarrito = (id) => {
        const searchObject= carrito.findIndex((item) => item.id==id);
        if(searchObject)
            return true
        else
            return false
    }
    
    let valorDelContexto = {
        cantidad: cantidad,
        carrito : carrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
    }

    return(
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}


export default CustomProvider;