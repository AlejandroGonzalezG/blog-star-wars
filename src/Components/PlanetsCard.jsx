import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';


const estiloCarta = {
  width: "18rem",
  margin: "5px"
}

const PlanetsCard = ({
  name,
  diameter,
  climate,
  population,
  index,
}) => {
  const [isActive, setIsActive] = useState(false);
  const { store, actions } = useContext(Context);

  
  return (
    <>
      <div className="card" style={estiloCarta}>
        <img
          src="https://static.wikia.nocookie.net/esstarwars/images/5/53/Ohmad.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <ul className="person-details">
            <li>Diameter: {diameter}</li>
            <li>Climate: {climate}</li>
            <li>Population: {population}</li>
          </ul>
          <div className="btns-container d-flex">
            <Link
              to={`details/planet/${index}`}
              className="btn btn-primary">
              Learn More!
            </Link>
            <button
              className="btn btn-secondary"
              onClick={() => actions.addFavorite(name)}
            >
              <i className="fa-solid fa-heart"></i>
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => actions.deleteFavorite(name)}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PlanetsCard;
