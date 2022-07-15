import { useContext } from 'react';
import Card from '../Components/Card';
import { Context } from '../store/appContext';

const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h1>Hi, home here!</h1>
      <div className="container d-flex align-items-center justify-content-center">
        <button
          className="btn btn-secondary"
          onClick={() => {
            actions.getCharacters(store?.characters.previous);
          }}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            actions.getCharacters(store?.characters.next);
          }}
        >
          Next
        </button>
      </div>
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
