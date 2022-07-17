import React from 'react';
import { useContext } from 'react';
import Card from '../Components/Card';
import { Context } from '../store/appContext';
import PeopleCard from '../Components/PeopleCard.jsx';
 
const estiloCard = {
  width: '100%',
};

const People = ({identificador, setIdentificador}) => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <button
          className="btn btn-secondary"
          onClick={() => {
            actions.getCharacters(store?.characters.previous);
          }}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            actions.getCharacters(store?.characters.next);
          }}
        >
          Next
        </button>
      </div>

      <div className="container">
        <div className="card mb-3" style={estiloCard}>
          <div className="row g-0">
            {!!store.characters &&
              store.characters.results.length > 0 &&
              store.characters.results.map((item, i) => (
                <PeopleCard {...item} key={item.name} index={i} identificador={identificador} setIdentificador={setIdentificador} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default People;
