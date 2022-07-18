import { useState } from 'react';
import { Link } from 'react-router-dom';

const PlanetsCard = ({
  name,
  diameter,
  climate,
  population,
  setIdentificador2,
  index,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
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
              className="btn btn-primary"
              onClickCapture={() => setIdentificador2(index)}
            >
              Learn More!
            </Link>
            {isActive ? (
              <button className="btn btn-secondary" onClick={handleClick}>
                <i className="fa-solid fa-heart"></i>
              </button>
            ) : (
              <button className="btn btn-secondary" onClick={handleClick}>
                <i className="fa-regular fa-heart"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default PlanetsCard;
