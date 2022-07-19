import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import DetailsPeople from '../Views/DetailsPeople';

const estiloCarta = {
  width: '18rem',
  margin: '5px',
};

const PeopleCard = ({ name, height, mass, gender, index }) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="card" style={estiloCarta} id={index}>
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
            <Link to={`details/character/${index}`} className="btn btn-primary">
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

            {/* {isActive ? (
              <button
                className="btn btn-secondary"
                onClick={() => {
                  handleClick();
                }}
              >
                <i className="fa-solid fa-heart"></i>
              </button>
            ) : (
              <button
                className="btn btn-secondary"
                // Add todo Item onclick of heart empty

                onClick={() => {
                  handleClick();
                  addItem(name);
                }}
              >
                <i className="fa-regular fa-heart"></i>
              </button>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};
export default PeopleCard;
