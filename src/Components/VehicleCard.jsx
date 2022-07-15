import { useState } from 'react';
import { Link } from 'react-router-dom';

const VehicleCard = ({ name, model, manufacturer, vehicle_class }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img
          src="https://iconarchive.com/download/i61907/jonathan-rey/star-wars-vehicles/Landspeeder.ico"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <ul className="person-details">
            <li>Model: {model}</li>
            <li>Manufacturer: {manufacturer}</li>
            <li>Class: {vehicle_class}</li>
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
export default VehicleCard;
