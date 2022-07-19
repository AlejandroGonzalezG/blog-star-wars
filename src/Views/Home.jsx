import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import { Context } from '../store/appContext';
import PeopleCard from '../Components/PeopleCard.jsx';
import PlanetsCard from '../Components/PlanetsCard.jsx';
import VehicleCard from '../Components/VehicleCard';
import '../Styles/Home.css';

const Home = () => {
  const { store, actions } = useContext(Context);
  // Events functions

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
                <PeopleCard {...item} key={item.name} index={i} />
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
