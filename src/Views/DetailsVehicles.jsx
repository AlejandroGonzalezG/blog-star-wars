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
const estiloContainer = {
  height: "100px",
  width: "213px"
}
const estiloContainer2 = {
  height: "150px",
  width: "213px"
}

const estiloImagen = {
  height: "366px",
  width: "640px"
}


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
            style={estiloImagen} ></img>
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
          <div className="row" style={estiloDiv2}>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Model</h5>
                <div>{store?.vehiculos?.results[identificador3].model}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Manufacturer</h5>
                <div>
                  {store?.vehiculos?.results[identificador3].manufacturer}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Cost in Credits</h5>
                <div>
                  {store?.vehiculos?.results[identificador3].cost_in_credits}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Length</h5>
                <div>{store?.vehiculos?.results[identificador3].length}</div>
              </div>
            </div>
            <div className="container-caqtegory" style={estiloContainer}>
              <div className="col-12">
                <h5>Max Atmosphering Speed</h5>
                <div>
                  {store?.vehiculos?.results[identificador3].max_atmosphering_speed}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Crew</h5>
                <div>{store?.vehiculos?.results[identificador3].crew}</div>
              </div>
            </div>
          </div>
          <div className="row" style={estiloDiv2}>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Passengers</h5>
                <div>{store?.vehiculos?.results[identificador3].passengers}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Cargo Capacity</h5>
                <div>
                  {store?.vehiculos?.results[identificador3].cargo_capacity}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Consumables</h5>
                <div>{store?.vehiculos?.results[identificador3].consumables}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Vehicle Class</h5>
                <div>
                  {store?.vehiculos?.results[identificador3].vehicle_class}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Pilots</h5>
                <div>{store?.vehiculos?.results[identificador3].pilots}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Films</h5>
                <div>{store?.vehiculos?.results[identificador3].films}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsVehiculos;
