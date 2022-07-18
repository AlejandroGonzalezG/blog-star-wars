import React, { useContext } from 'react'
import { Context } from '../store/appContext';
import PlanetsCard from '../Components/PlanetsCard.jsx';


const estiloCard = {
  width: "100%"
}
const estiloBoton = {
  margin: "10px"
}

const Planets = ({identificador2, setIdentificador2}) => {

  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <button
          className="btn btn-secondary"
          onClick={() => {
            actions.getPlanetas(store?.planetas.previous);
          }}
          style={estiloBoton}>
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            actions.getPlanetas(store?.planetas.next);
          }}
        >
          Next
        </button>
      </div>

      <div className="container">
        <div className="card mb-3" style={estiloCard}>
          <div className="row g-0">
            {
              !!store.planetas &&
              store.planetas.results.length > 0 &&
              store.planetas.results.map((item, i) => (
                <PlanetsCard {...item} key={item.name} index={i} identificador2={identificador2} setIdentificador2={setIdentificador2}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Planets;
 