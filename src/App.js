import { BrowserRouter, Routes, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Navbar from './Components/Navbar';
import NotFound from './Views/NotFound';
import Home from './Views/Home';
import People from './Views/People';
import Vehicles from './Views/Vehicles';
import Planets from './Views/Planets';
import DetailsPeople from './Views/DetailsPeople';
import DetailsPlanets from './Views/DetailsPlanets';
import DetailsVehicles from './Views/DetailsVehicles';
import { useState } from 'react';

const App = () => {
  // States
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
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
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  todos={todos}
                  setTodos={setTodos}
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
              path="/details/character/:index"
              element={
                <DetailsPeople
                  identificador={identificador}
                  setIdentificador={setIdentificador}
                />
              }
            />
            {/* People Card Component Route to DetailsPeople */}
            <Route
              path="/category/people/details/character/:index"
              element={
                <DetailsPeople
                  identificador={identificador}
                  setIdentificador={setIdentificador}
                />
              }
            />
            {/* Home Component Route to DetailsVehicles */}
            <Route
              path="details/vehicle/:index"
              element={
                <DetailsVehicles
                  identificador3={identificador3}
                  setIdentificador3={setIdentificador3}
                />
              }
            />
            {/* VehicleCard Component Route to DetailsVehicles */}
            <Route
              path="/category/vehicles/details/vehicle/:index"
              element={
                <DetailsVehicles
                  identificador3={identificador3}
                  setIdentificador3={setIdentificador3}
                />
              }
            />
            {/* Home Component Route to DetailsPlanets */}
            <Route
              path="/details/planet/:index"
              element={
                <DetailsPlanets
                  identificador2={identificador2}
                  setIdentificador2={setIdentificador2}
                />
              }
            />
            {/* PlanetsCard Component Route to DetailsPlanets */}
            <Route
              path="/category/planets/details/planet/:index"
              element={
                <DetailsPlanets
                  identificador2={identificador2}
                  setIdentificador2={setIdentificador2}
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
