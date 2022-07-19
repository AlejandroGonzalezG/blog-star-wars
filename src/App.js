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

const App = () => {
  // States

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/category/people" element={<People />} />
            <Route path="/category/planets" element={<Planets />} />
            <Route path="/category/vehicles" element={<Vehicles />} />
            {/* Home Component Route to DetailsPeople */}
            <Route
              path="/details/character/:index"
              element={<DetailsPeople />}
            />
            {/* People Card Component Route to DetailsPeople */}
            <Route
              path="/category/people/details/character/:index"
              element={<DetailsPeople />}
            />
            {/* Home Component Route to DetailsVehicles */}
            <Route
              path="details/vehicle/:index"
              element={<DetailsVehicles />}
            />
            {/* VehicleCard Component Route to DetailsVehicles */}
            <Route
              path="/category/vehicles/details/vehicle/:index"
              element={<DetailsVehicles />}
            />
            {/* Home Component Route to DetailsPlanets */}
            <Route path="/details/planet/:index" element={<DetailsPlanets />} />
            {/* PlanetsCard Component Route to DetailsPlanets */}
            <Route
              path="/category/planets/details/planet/:index"
              element={<DetailsPlanets />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default injectContext(App);
