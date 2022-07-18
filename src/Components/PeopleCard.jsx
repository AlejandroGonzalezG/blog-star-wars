import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import DetailsPeople from '../Views/DetailsPeople';



const estiloCarta = {
  width: "18rem",
  margin: "5px"
}

const PeopleCard = ({
  name,
  height,
  mass,
  gender,
  index,
  identificador,
  setIdentificador,
  todos,
  setTodos,
  inputValue,
  setInputValue,
  textHandler,
  addTodo,
  isDeleteActive,
  setIsDeleteActive,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setIsDeleteActive(!isDeleteActive);
  };

  const addItem = name => {
    textHandler(name);
    addTodo(name);
  };

  // const renderBtn = () => {
  //   if (isDeleteActive) {
  //     // If isActive is true appears solid heart
  //     return (
  //       <button
  //         className="btn btn-secondary"
  //         onClick={() => {
  //           handleClick();
  //           console.log(isDeleteActive);
  //         }}
  //       >
  //         <i className="fa-solid fa-heart"></i>
  //       </button>
  //     );
  //     // isActive false appears empty hear
  //   } else if (!isDeleteActive) {
  //     return (
  //       <button
  //         className="btn btn-secondary"
  //         // Add todo Item onclick of heart empty

  //         onClick={() => {
  //           addItem(name);
  //           handleClick();
  //           console.log(isDeleteActive);
  //         }}
  //       >
  //         <i className="fa-regular fa-heart"></i>
  //       </button>
  //     );
  //   }
  // };

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
            <Link
              to={`details/character/${index}`}
              className="btn btn-primary"
              onClickCapture={() => setIdentificador(index)}
            >
              Learn More!
            </Link>

            {/* {renderBtn()} */}
            {isActive ? (
              <button
                className="btn btn-secondary"
                onClick={() => {
                  handleClick();
                  setIsDeleteActive(!isDeleteActive);
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
            )}
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
