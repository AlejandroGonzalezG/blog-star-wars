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
  height: "150px",
  width: "256px"
}
const estiloContainer2 = {
  height: "200px",
  width: "256px"
}

const DetailsPeople = ({ identificador }) => {
  const { store } = useContext(Context);
  const params = useParams();
  return (
    <>
      <div className="card mb-3" style={estiloDiv}>
        <div className="row g-0">
          <div className="col-md-8">
            <img
              src="https://muyadictivo.com/wp-content/uploads/2021/05/mejor-momento-de-luke-skywalker.jpg"
              className="img-fluid rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">
                {store?.characters?.results[params.index].name}
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
                <h5>Dimensions</h5>
                <div>
                  Height: {store?.characters?.results[params.index].height}{' '}
                  <br></br>
                  Mass: {store?.characters?.results[params.index].mass}
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Physical characteristics</h5>
                <div>
                  Hair Color:{' '}
                  {store?.characters?.results[params.index].hair_color} <br></br>
                  Skin Color:{' '}
                  {store?.characters?.results[params.index].skin_color} <br></br>
                  Eye Color: {
                    store?.characters?.results[params.index].eye_color
                  }{' '}
                  <br></br>
                </div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Birth Year</h5>
                <div>{store?.characters?.results[params.index].birth_year}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>Gender</h5>
                <div>{store?.characters?.results[params.index].gender}</div>
              </div>
            </div>
            <div className="container-category" style={estiloContainer}>
              <div className="col-12">
                <h5>HomeWorld</h5>
                <div>{store?.characters?.results[params.index].homeworld}</div>
              </div>
            </div>
          </div>
          <div className="row" style={estiloDiv2}>
            <div className="container-category" style={estiloContainer2}>
              <div className="col-12">
                <h5>Films</h5>
                <div>{store?.characters?.results[params.index].films}</div>
              </div>
            </div>
            <div className="container-category"style={estiloContainer2}>
              <div className="col-12">
                <h5>Species</h5>
                <div>{store?.characters?.results[params.index].species}</div>
              </div>
            </div>
            <div className="container-category"style={estiloContainer2}>
              <div className="col-12">
                <h5>Vehicles</h5>
                <div>{store?.characters?.results[params.index].vehicles}</div>
              </div>
            </div>
            <div className="container-category"style={estiloContainer2}>
              <div className="col-12">
                <h5>StarShips</h5>
                <div>{store?.characters?.results[params.index].starships}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPeople;
