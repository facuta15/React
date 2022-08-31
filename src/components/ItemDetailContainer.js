import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { db } from "../firebase"
import { collection , getDoc , doc } from "firebase/firestore"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();
    
    useEffect(() => {

        const productosCollection = collection(db, "products") 
        const referencia = doc(productosCollection,id)
        console.log(referencia); 
        const consulta = getDoc(referencia) 

        consulta
        .then((res)=>{
          setItem(res.data())
        })
        .catch((err) => {
            console.log(err)
        })

    }, [id])

      return(
        <div>
          <ItemDetail item = {item}></ItemDetail>
        </div>
      )
}

export default ItemDetailContainer;