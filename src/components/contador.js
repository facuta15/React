
import { Button } from 'react-bootstrap';

const Contador = ({estadoPadre , setEstadoPadre,onAdd}) => {

  const sumar = () => {
    setEstadoPadre(estadoPadre + 1);
  };

  const restar = () => {
    setEstadoPadre(estadoPadre - 1);
  };

  const confirmar = () => {
    onAdd()
  };

  return (
    <div className="justify-content-center d-flex gap-1">
      <Button variant="success" onClick={sumar}>+</Button>
      <Button variant="danger" onClick={restar}>-</Button>
      <Button variant="secondary" onClick={confirmar}>Confirmar</Button>
    </div>
  );
};

export default Contador;
