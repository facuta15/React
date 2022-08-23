
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
    <div>
      <button onClick={sumar}>summar</button>
      <button onClick={restar}>restar</button>
      <button onClick={confirmar}>Confirmar</button>
    </div>
  );
};

export default Contador;
