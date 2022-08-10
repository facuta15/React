import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const productosIniciales = [
    {
        id: 1,
        nombre: "Casco",
        precio: 100
    },
    {
        id: 2,
        nombre: "Antiparras",
        precio: 200
    },
    {
        id: 3,
        nombre: "Defensas",
        precio: 300
    },
    {
        id: 4,
        nombre: "Sunchos",
        precio: 400
    }
]

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {
        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
            }, 2000)
        })
        pedido.then((resultado) => {
            setProductos(resultado)
            setLoading(false)
        })
        pedido.catch((error) => {
            console.log("No se pudo completar el pedido")
        })

    }, [])
    if (loading) {
        return (
            <p>Loading...</p>
        )
    } else {
        return (
            <ItemList productos={productos} />
        )
    }

}
export default ItemListContainer