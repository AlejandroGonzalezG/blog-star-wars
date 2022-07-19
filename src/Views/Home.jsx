import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import { Context } from '../store/appContext';
import PeopleCard from '../Components/PeopleCard.jsx';
import PlanetsCard from '../Components/PlanetsCard.jsx';
import VehicleCard from '../Components/VehicleCard';
import '../Styles/Home.css';

const Home = ({
  todos,
  setTodos,
  inputValue,

  setInputValue,
}) => {
  const { store, actions } = useContext(Context);
  // Events functions

  const addTodo = name => {
    // When button clicked, add todo to an object with its text and an id
    setTodos([
      ...todos,
      {
        text: name,
        id: Math.round(Math.random() * 1000),
      },
    ]);
  };

  return (
    <>
      <div className="people mt-5">
        <div className="header-container mb-4 d-flex align-items-center">
          <h1 className="category-title">People</h1>
          <button className="btn btn-more">
            <Link to="/category/people">Show all!</Link>
          </button>
        </div>
        <div className="d-flex">
          {!!store.characters &&
            store.characters.results.length > 0 &&
            store.characters.results
              .filter((item, index, obj) => index <= 3)
              .map((item, i) => (
                <PeopleCard
                  {...item}
                  key={item.name}
                  index={i}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  todos={todos}
                  setTodos={setTodos}
                  addTodo={addTodo}
                />
              ))}
        </div>
      </div>
      <div className="vehicles mt-5">
        <div className="header-container mb-4 d-flex align-items-center">
          <h1 className="category-title">Vehicles</h1>
          <button className="btn btn-more">
            <Link to="/category/vehicles">Show all!</Link>
          </button>
        </div>
        <div className="d-flex">
          {!!store.vehiculos &&
            store.vehiculos.results.length > 0 &&
            store.vehiculos.results
              .filter((item, index, obj) => index <= 3)
              .map((item, i) => (
                <VehicleCard {...item} key={item.name} index={i} />
              ))}
        </div>
      </div>
      <div className="planets mt-5">
        <div className="header-container mb-4 d-flex align-items-center">
          <h1 className="category-title">Planets</h1>
          <button className="btn btn-more">
            <Link to="/category/planets">Show all!</Link>
          </button>
        </div>
        <div className="d-flex">
          {!!store.planetas &&
            store.planetas.results.length > 0 &&
            store.planetas.results
              .filter((item, index, obj) => index <= 3)
              .map((item, i) => (
                <PlanetsCard {...item} key={item.name} index={i} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Home;
