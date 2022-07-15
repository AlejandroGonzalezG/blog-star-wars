import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import { Context } from '../store/appContext';
import '../Styles/Home.css';

const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="people mt-5">
        <div className="header-container d-flex align-items-center">
          <h1 className="category-title">People</h1>
          <button className="btn btn-more">
            <Link to="/category/people">Learn More :)</Link>
          </button>
        </div>
        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="vehicles mt-5">
        <div className="header-container d-flex align-items-center">
          <h1 className="category-title">Vehicles</h1>
          <button className="btn btn-more">
            <Link to="/category/vehicles">Learn More :)</Link>
          </button>
        </div>
        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="planets mt-5">
        <div className="header-container d-flex align-items-center">
          <h1 className="category-title">Planets</h1>
          <button className="btn btn-more">
            <Link to="/category/planets">Learn More :)</Link>
          </button>
        </div>
        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
