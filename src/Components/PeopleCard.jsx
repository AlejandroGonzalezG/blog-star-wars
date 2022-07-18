import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import DetailsPeople from '../Views/DetailsPeople';


 
const PeopleCard = ({ name, height, mass, gender, index, identificador, setIdentificador }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="card" style={{ width: '18rem' }} id={index}>
        <img
          src="https://aux.iconspalace.com/uploads/204257333216454877.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <ul className="person-details">
            <li>Height: {height}</li>
            <li>Mass: {mass}</li>
            <li>Gender: {gender}</li>
          </ul>
          <div className="btns-container d-flex">
            <Link to={`details/${index}`} className="btn btn-primary" onClickCapture={() => setIdentificador(index)} >
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
export default PeopleCard;
