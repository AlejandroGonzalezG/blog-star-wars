import { useState } from 'react';
import { Link } from 'react-router-dom';



const PlanetsCard = ({ name, diameter, climate, population }) => {
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
            <li>{diameter}</li>
            <li>{climate}</li>
            <li>{population}</li>
          </ul>
          <div className="btns-container d-flex">
            <Link to="/" className="btn btn-primary">
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