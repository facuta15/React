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



   
    const agregarProducto = (producto, estadoPadre)=>{
        const newItem= {
            ...producto,
            estadoPadre
        }
        if(estaEnCarrito(newItem.id)){
            const findProduct = carrito.find(x => x.id === newItem.id)
            const productIndex = carrito.indexOf(findProduct)
            const auxArray = [...carrito]
            auxArray[productIndex].estadoPadre += estadoPadre
            setCarrito(auxArray)
            setCantidad(estadoPadre)
        }
        else{
            console.log(estadoPadre)
            setCarrito([...carrito,newItem])
            setCantidad(estadoPadre)
        }
    }

    const eliminarProducto = (id) => {
        const searchObject = carrito.findIndex((item) => item.id == id);
        carrito.splice(searchObject,1);
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const estaEnCarrito = (id) => {
        return carrito.some(x => x.id === id)
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