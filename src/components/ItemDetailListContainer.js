import { useEffect, useState } from "react"
import ItemDetailList from "./ItemDetailList"

const detalleProductos = [
    {
        id: 1,
        detalle: "Casco LS2,un casco para tu cabeza",
    },
    {
        id: 2,
        detalle: "Antiparras ojitos, para protejer tu vista",
    },
    {
        id: 3,
        detalle: "Defensas, porque si te comes una piedra, tu moto te lo va a agradecer",
    },
    {
        id: 4,
        detalle: "Sunchos para atar la carpa",
    }
]

const ItemDetailListContainer = () => {

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
    useEffect(() => {
    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res(detalleProductos);
      }, 2000);
    });
    pedido.then((resultado) => {
      setProductos(resultado);
      setLoading(false);
    });
    pedido.catch((error) => {
      console.log("No se pudo completar el pedido a la api imaginaria");
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return <ItemDetailList details={details} />;
  }
};
export default ItemDetailListContainer;


