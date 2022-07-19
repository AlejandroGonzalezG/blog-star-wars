import { useState } from 'react';
import { Link } from 'react-router-dom';


const estiloCarta = {
  width: "18rem",
  margin: "5px"
}

const estiloCartaCuerpo = {
  height: "210px"
}

const estiloBotones2 = {
  width: "254px",
  justifyContent: "center",
  marginTop: "none",
  marginBottom: "15px"
}

const VehicleCard = ({
  name,
  model,
  manufacturer,
  vehicle_class,
  index,
}) => {
  const [isActive, setIsActive] = useState(false);
 
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="card" style={estiloCarta}>
        <img
          src="https://iconarchive.com/download/i61907/jonathan-rey/star-wars-vehicles/Landspeeder.ico"
          className="card-img-top"
          alt="..."
        />
        <div className="container-category">
          <div className="card-body" style={estiloCartaCuerpo} >
            <h5 className="card-title">{name}</h5>
            <ul className="person-details">
              <li>Model: {model}</li>
              <li>Manufacturer: {manufacturer}</li>
              <li>Class: {vehicle_class}</li>
            </ul>
          </div>
          <div className="btns-container d-flex" style={estiloBotones2}>
            <Link
              to={`details/vehicle/${index}`}
              className="btn btn-primary">
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