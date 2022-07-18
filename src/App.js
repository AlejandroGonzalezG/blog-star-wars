import { BrowserRouter, Routes, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Navbar from './Components/Navbar';
import NotFound from './Views/NotFound';
import Home from './Views/Home';
import People from './Views/People';
import Vehicles from './Views/Vehicles';
import Planets from './Views/Planets';
import DetailsPeople from './Views/DetailsPeople';
import DetailsPlanetas from './Views/DetailsPlanets';
import DetailsVehiculos from './Views/DetailsVehicles';
import { useState } from 'react';

const App = () => {
  const [identificador, setIdentificador] = useState(null);
  const [identificador2, setIdentificador2] = useState(null);
  const [identificador3, setIdentificador3] = useState(null);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route
              path="/"
              element={
                <Home
                  identificador={identificador}
                  setIdentificador={setIdentificador}
                  identificador2={identificador2}
                  setIdentificador2={setIdentificador2}
                  identificador3={identificador3}
                  setIdentificador3={setIdentificador3}
                />
              }
            />
            <Route
              path="/category/people"
              element={
                <People
                  identificador={identificador}
                  setIdentificador={setIdentificador}
                />
              }
            />
            <Route
              path="/category/planets"
              element={
                <Planets
                  identificador2={identificador2}
                  setIdentificador2={setIdentificador2}
                />
              }
            />
            <Route
              path="/category/vehicles"
              element={
                <Vehicles
                  identificador3={identificador3}
                  setIdentificador3={setIdentificador3}
                />
              }
            />
            {/* Home Component Route to DetailsPeople */}
            <Route
              path="/details/:index"
              element={
                <DetailsPeople
                  identificador={identificador}
                  setIdentificador={setIdentificador}
                />
              }
            />
            {/* People Component Route to DetailsPeople */}
            <Route
              path="/category/people/details/:index"
              element={
                <DetailsPeople
                  identificador={identificador}
                  setIdentificador={setIdentificador}
                />
              }
            />
            {/* Home Component Route to DetailsPlanetas */}
            <Route
              path="/details/planet/:index"
              element={
                <DetailsPlanetas
                  identificador2={identificador2}
                  setIdentificador2={setIdentificador2}
                />
              }
            />
            <Route
              path="/category/planets/details/planet/:index"
              element={
                <DetailsPlanetas
                  identificador2={identificador2}
                  setIdentificador2={setIdentificador2}
                />
              }
            />
            <Route
              path="/category/vehicles/details/:index"
              element={
                <DetailsVehiculos
                  identificador3={identificador3}
                  setIdentificador3={setIdentificador3}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default injectContext(App);
