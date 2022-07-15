import { BrowserRouter, Routes, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Navbar from './Components/Navbar';
import NotFound from './Views/NotFound';
import Home from './Views/Home';
import People from './Views/People';
import Vehicles from './Views/Vehicles';
import Planets from './Views/Planets';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/category/people" element={<People />} />
          <Route path="/category/vehicles" element={<Vehicles />} />
          <Route path="/category/planets" element={<Planets />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default injectContext(App);
