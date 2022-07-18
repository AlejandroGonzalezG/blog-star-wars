import { useContext } from "react";
import PeopleCard from "../Components/PeopleCard.jsx"
import { Context } from "../store/appContext";

const estiloDiv = {
  margin: "15px"
}
const estiloDiv2 = {
  marginTop: "30px",
  padding: "2px"
}

const DetailsPlanetas = ({ identificador2 }) => {
  const { store } = useContext(Context);
  return (
    <>
      <div className="card mb-3" style={estiloDiv}>
        <div className="row g-0">
          <div className="col-md-8">
            <img src="https://static.wikia.nocookie.net/esstarwars/images/3/34/Lothal_Full_Planet.png" className="img-fluid rounded-start" alt="..."></img>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">{store?.planetas.results[identificador2].name}</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, velit beatae qui ab nam saepe tempore assumenda in necessitatibus tempora quasi voluptates commodi. Eum dolore dolorem maxime, veniam molestias maiores!</p>
            </div>
          </div>
        </div>
        <div className="container" style={estiloDiv2}>
          <div className="row">
            <div className="col-1">
              <h6>Rotation Period</h6>
              <div>
                {store?.planetas?.results[identificador2].rotation_period}
              </div>
            </div>
            <div className="col-1">
              <h6>Orbital Period</h6>
              <div>
                {store?.planetas?.results[identificador2].orbital_period}
              </div>
            </div>
            <div className="col-1">
              <h6>Diameter</h6>
              <div>
                {store?.planetas?.results[identificador2].diameter}
              </div>
            </div>
            <div className="col-1">
              <h6>Climate</h6>
              <div>
                {store?.planetas?.results[identificador2].climate}
              </div>
            </div>
            <div className="col-1">
              <h6>Gravity</h6>
              <div>
                {store?.planetas?.results[identificador2].gravity}
              </div>
            </div>
            <div className="col-1">
              <h6>Terrain</h6>
              <div>
                {store?.planetas?.results[identificador2].terrain}
              </div>
            </div>
            <div className="col-1">
              <h6>Surface Water</h6>
              <div>
                {store?.planetas?.results[identificador2].surface_water}
              </div>
            </div>
            <div className="col-1">
              <h6>Population</h6>
              <div>
                {store?.planetas?.results[identificador2].population}
              </div>
            </div>
            <div className="col-2">
              <h6>Residents</h6>
              <div>
                {store?.planetas?.results[identificador2].residents}
              </div>
            </div>
            <div className="col-2">
              <h6>Films</h6>
              <div>
                {store?.planetas?.results[identificador2].films}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPlanetas;
