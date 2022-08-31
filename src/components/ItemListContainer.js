import { useEffect, useState } from "react"
import { db } from "../firebase"
import ItemList from "./ItemList"
import { collection, getDoc,getDocs } from "firebase/firestore"

const productosCollection = collection(db,"products")


const productosIniciales = [
    {
        id: 1,
        nombre: "Casco",
        precio: 100,
        detail: "Casco LS2,un casco para tu cabeza",
        categoryID: 1
    },
    {
        id: 2,
        nombre: "Antiparras",
        precio: 200,
        detail: "Antiparras ojitos, para protejer tu vista",
        categoryID: 2
    },
    {
        id: 3,
        nombre: "Defensas",
        precio: 300,
        detail: "Defensas, porque si te comes una piedra, tu moto te lo va a agradecer",
        categoryID: 2
    },
    {
        id: 4,
        nombre: "Sunchos",
        precio: 400,
        detail: "Sunchos para atar la carpa",
        categoryID: 2
    }
]
const ItemListContainer = ({carrito , idCategoria}) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    
    useEffect(() => {
        const consulta = getDocs(productosCollection)
        consulta
        .then(snapshot =>{
            const productos = snapshot.docs.map(doc=>{
                return{
                    ...doc.data(),
                    id: doc.id
                }
            })
            if(!carrito){
                setProductos(productos)
                setLoading(!loading)
            }
            else{
                setProductos(carrito)
                setLoading(!loading)
            }
        }
            
        )
        .catch(err=>{
            console.log(err)
        })

    }, [])
    if (loading) {
        return (
            <p>Loading...</p>
        )
    } else {
        return (
            <ItemList productos={productos} id= {idCategoria} >
            </ItemList>
        )
    }

}
export default ItemListContainer