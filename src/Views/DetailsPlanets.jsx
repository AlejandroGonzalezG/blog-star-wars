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
  width: "256px"
}
const estiloContainer2 = {
  height: "150px",
  width: "256px"
}

const estiloContainerNaboo = {
  height: "380px",
  width: "256px"
}
const estiloImagen = {
  height: "366px",
  width: "640px"
}

const DetailsPlanetas = () => {
  const { store } = useContext(Context);
  const params = useParams();
  return (
    <>
      <div className="card mb-3" style={estiloDiv}>
        <div className="row g-0">
          <div className="col-md-8">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/4/2018/08/eso0603a-b364432.jpg?quality=90&resize=700,466"
              className="img-fluid rounded-start"
              alt="..."
              style={estiloImagen}></img>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">
                {store?.planetas.results[params.index].name}
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
                <h5>Rotation Period</h5>
                <div>
                  {store?.planetas?.results[params.index].rotation_period}
                </div>
              </div>
            </div>
            <div className="container-categiry" style={estiloContainer}>
              <div className="col-12">
                <h5>Orbital Period</h5>
                <div>
                  {store?.planetas?.results[params.index].orbital_period}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Diameter</h5>
                <div>{store?.planetas?.results[params.index].diameter}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Climate</h5>
                <div>{store?.planetas?.results[params.index].climate}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Gravity</h5>
                <div>{store?.planetas?.results[params.index].gravity}</div>
              </div>
            </div>
          </div>
          <div className="row" style={estiloDiv2}>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Terrain</h5>
                <div>{store?.planetas?.results[params.index].terrain}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Surface Water</h5>
                <div>
                  {store?.planetas?.results[params.index].surface_water}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Population</h5>
                <div>{store?.planetas?.results[params.index].population}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainerNaboo}>
              <div className="col-12">
                <h5>Residents</h5>
                <div>{store?.planetas?.results[params.index].residents}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Films</h5>
                <div>{store?.planetas?.results[params.index].films}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPlanetas;
