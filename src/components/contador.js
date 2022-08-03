import { useState } from "react"
import Button from 'react-bootstrap/Button';
const Contador= ()=>{
    
    const [contador,setContador]= useState(0)
    const sumar=()=>{
        setContador(contador + 1) 
    }
    const restar=()=>{
        setContador(contador - 1) 
    }
    return(
        <div>
            <p>Al llegar a 10 le regalamos una moto, intente: {contador}</p>
            <Button variant="secondary" onClick={sumar}>Sumar</Button>
            <Button variant="secondary" onClick={restar}>restar</Button>
        </div>
    ) 
}

export default Contador;