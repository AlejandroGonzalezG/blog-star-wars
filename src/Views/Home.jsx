import { useContext } from 'react';
import Card from '../Components/Card';
import { Context } from '../store/appContext';

const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h1>Hi, home here!</h1>

      <div className="d-flex">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
