import { BrowserRouter, Routes, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Navbar from './Components/Navbar';
import NotFound from './Views/NotFound';
import Home from './Views/Home';
import People from './Views/People';
import Vehicles from './Views/Vehicles';
import Planets from './Views/Planets';
import Details from './Views/Details';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/category/people" element={<People />} />
            <Route path="/category/vehicles" element={<Vehicles />} />
            <Route path="/category/planets" element={<Planets />} />
            <Route
              path="/category/people/details/:index"
              element={<Details />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default injectContext(App);
