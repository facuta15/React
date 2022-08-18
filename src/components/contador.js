import { useState } from "react"

const Contador = ({onAdd}) => {

    const [contador, setContador] = useState(0)
    const [confirmed, setConfirmed] = useState(false)

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const confirmar = () => {
        onAdd(contador)
        setConfirmed(confirmed)
    }

    return (
        <div>
            <p>Cantidad: {contador}</p>
            <button onClick={sumar}>summar</button>
            <button onClick={restar}>restar</button>
            <button onClick={confirmar}>confirmar</button>
        </div>
    )
}

export default Contador