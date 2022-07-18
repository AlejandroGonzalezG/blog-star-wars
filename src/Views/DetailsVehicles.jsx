import { useContext } from 'react';
import PeopleCard from '../Components/PeopleCard.jsx';
import { Context } from '../store/appContext';

const estiloDiv = {
  margin: '15px',
};
const estiloDiv2 = {
  marginTop: '30px',
  padding: '2px',
};

const DetailsVehiculos = ({ identificador3 }) => {
  const { store } = useContext(Context);
  return (
    <>
      <div className="card mb-3" style={estiloDiv}>
        <div className="row g-0">
          <div className="col-md-8">
            <img
              src="https://images.brickset.com/news/62976_Terrain.png"
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">
                {store?.vehiculos?.results[identificador3].name}
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                velit beatae qui ab nam saepe tempore assumenda in
                necessitatibus tempora quasi voluptates commodi. Eum dolore
                dolorem maxime, veniam molestias maiores!
              </p>
            </div>
          </div>
        </div>
        <div className="container" style={estiloDiv2}>
          <div className="row">
            <div className="col-1">
              <h6>Model</h6>
              <div>{store?.vehiculos?.results[identificador3].model}</div>
            </div>
            <div className="col-1">
              <h6>Manufacturer</h6>
              <div>
                {store?.vehiculos?.results[identificador3].manufacturer}
              </div>
            </div>
            <div className="col-1">
              <h6>Cost in Credits</h6>
              <div>
                {store?.vehiculos?.results[identificador3].cost_in_credits}
              </div>
            </div>
            <div className="col-1">
              <h6>Length</h6>
              <div>{store?.vehiculos?.results[identificador3].length}</div>
            </div>
            <div className="col-1">
              <h6>Max Atmosphering Speed</h6>
              <div>
                {
                  store?.vehiculos?.results[identificador3]
                    .max_atmosphering_speed
                }
              </div>
            </div>
            <div className="col-1">
              <h6>Crew</h6>
              <div>{store?.vehiculos?.results[identificador3].crew}</div>
            </div>
            <div className="col-1">
              <h6>Passengers</h6>
              <div>{store?.vehiculos?.results[identificador3].passengers}</div>
            </div>
            <div className="col-1">
              <h6>Cargo Capacity</h6>
              <div>
                {store?.vehiculos?.results[identificador3].cargo_capacity}
              </div>
            </div>
            <div className="col-1">
              <h6>Consumables</h6>
              <div>{store?.vehiculos?.results[identificador3].consumables}</div>
            </div>
            <div className="col-1">
              <h6>Vehicle Class</h6>
              <div>
                {store?.vehiculos?.results[identificador3].vehicle_class}
              </div>
            </div>
            <div className="col-1">
              <h6>Pilots</h6>
              <div>{store?.vehiculos?.results[identificador3].pilots}</div>
            </div>
            <div className="col-1">
              <h6>Films</h6>
              <div>{store?.vehiculos?.results[identificador3].films}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsVehiculos;
