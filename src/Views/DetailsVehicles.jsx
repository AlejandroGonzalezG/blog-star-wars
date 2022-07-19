import { useContext } from 'react';
import { useParams } from 'react-router-dom';
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


const DetailsVehiculos = () => {
  const { store } = useContext(Context);
  const params = useParams();
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
                {store?.vehiculos?.results[params.index].name}
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
                <div>{store?.vehiculos?.results[params.index].model}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Manufacturer</h5>
                <div>
                  {store?.vehiculos?.results[params.index].manufacturer}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Cost in Credits</h5>
                <div>
                  {store?.vehiculos?.results[params.index].cost_in_credits}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Length</h5>
                <div>{store?.vehiculos?.results[params.index].length}</div>
              </div>
            </div>
            <div className="container-caqtegory" style={estiloContainer}>
              <div className="col-12">
                <h5>Max Atmosphering Speed</h5>
                <div>
                  {store?.vehiculos?.results[params.index].max_atmosphering_speed}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Crew</h5>
                <div>{store?.vehiculos?.results[params.index].crew}</div>
              </div>
            </div>
          </div>
          <div className="row" style={estiloDiv2}>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Passengers</h5>
                <div>{store?.vehiculos?.results[params.index].passengers}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Cargo Capacity</h5>
                <div>
                  {store?.vehiculos?.results[params.index].cargo_capacity}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Consumables</h5>
                <div>{store?.vehiculos?.results[params.index].consumables}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Vehicle Class</h5>
                <div>
                  {store?.vehiculos?.results[params.index].vehicle_class}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Pilots</h5>
                <div>{store?.vehiculos?.results[params.index].pilots}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Films</h5>
                <div>{store?.vehiculos?.results[params.index].films}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsVehiculos;
