import { useEffect, useState } from "react"
import { db } from "../firebase"
import ItemList from "./ItemList"
import { collection, getDoc,getDocs } from "firebase/firestore"

const productosCollection = collection(db,"products")

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