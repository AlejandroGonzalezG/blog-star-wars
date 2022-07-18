import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import { Context } from '../store/appContext';
import PeopleCard from '../Components/PeopleCard.jsx';
import PlanetsCard from '../Components/PlanetsCard.jsx';
import VehicleCard from '../Components/VehicleCard';
import '../Styles/Home.css';

const Home = ({
  identificador,
  setIdentificador,
  identificador2,
  setIdentificador2,
  identificador3,
  setIdentificador3,
}) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="people mt-5">
        <div className="header-container mb-4 d-flex align-items-center">
          <h1 className="category-title">People</h1>
          <button className="btn btn-more">
            <Link to="/category/people">Learn More :)</Link>
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
                  identificador={identificador}
                  setIdentificador={setIdentificador}
                />
              ))}
        </div>
      </div>
      <div className="vehicles mt-5">
        <div className="header-container mb-4 d-flex align-items-center">
          <h1 className="category-title">Vehicles</h1>
          <button className="btn btn-more">
            <Link to="/category/vehicles">Learn More :)</Link>
          </button>
        </div>
        <div className="d-flex">
          {!!store.vehiculos &&
            store.vehiculos.results.length > 0 &&
            store.vehiculos.results
              .filter((item, index, obj) => index <= 3)
              .map((item, i) => (
                <VehicleCard
                  {...item}
                  key={item.name}
                  index={i}
                  identificador3={identificador3}
                  setIdentificador3={setIdentificador3}
                />
              ))}
        </div>
      </div>
      <div className="planets mt-5">
        <div className="header-container mb-4 d-flex align-items-center">
          <h1 className="category-title">Planets</h1>
          <button className="btn btn-more">
            <Link to="/category/planets">Learn More :)</Link>
          </button>
        </div>
        <div className="d-flex">
          {!!store.planetas &&
            store.planetas.results.length > 0 &&
            store.planetas.results
              .filter((item, index, obj) => index <= 3)
              .map((item, i) => (
                <PlanetsCard
                  {...item}
                  key={item.name}
                  index={i}
                  identificador2={identificador2}
                  setIdentificador2={setIdentificador2}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default Home;
