import React from 'react';
import { useContext } from 'react';
import Card from '../Components/Card';
import { Context } from '../store/appContext';

const estiloCard = {
  width: '100%',
};

const People = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
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

      <div className="container">
        <div className="card mb-3" style={estiloCard}>
          <div className="row g-0">
            <div className="col-md-8">
              <img
                src="https://s.yimg.com/ny/api/res/1.2/iEvfx3t.A3307FS0iMH.bA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTQ4MA--/https://s.yimg.com/uu/api/res/1.2/ZjF63mKLcXfJ_7d9Xm48ZA--~B/aD03MjA7dz0xNDQwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/es/esquire_spain_51/1f275d2dfe4c7631713e5e15fcb0294f"
                className="img-fluid rounded-start"
                alt="..."
              ></img>
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">Physical characteristics</div>
          <div className="col-md-2">Birth-year</div>
          <div className="col-md-2">Gender</div>
          <div className="col-md-1">HomeWorld</div>
          <div className="col-md-1">Films</div>
          <div className="col-md-1">Species</div>
          <div className="col-md-1">Vehicles</div>
          <div className="col-md-1">Starships</div>
        </div>
      </div>
    </>
  );
};

export default People;
