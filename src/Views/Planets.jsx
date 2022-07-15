import React, { useContext } from 'react'
import { Context } from '../store/appContext';
import PlanetsCard from '../Components/PlanetsCard.jsx';


const estiloCard = {
  width: "100%"
}


const Planets = () => {

  const { store, actions } = useContext(Context);

  console.log(store)
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <button
          className="btn btn-secondary"
          onClick={() => {
            actions.getPlanetas(store?.planetas.previous);
          }}
        >
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
              store.planetas.results.map((item,) => (
                <PlanetsCard {...item} key={item.name} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Planets;
