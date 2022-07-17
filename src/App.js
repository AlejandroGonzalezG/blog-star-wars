import { BrowserRouter, Routes, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Navbar from './Components/Navbar';
import NotFound from './Views/NotFound';
import Home from './Views/Home';
import People from './Views/People';
import Vehicles from './Views/Vehicles';
import Planets from './Views/Planets';
import DetailsPeople from './Views/DetailsPeople';
import { useState } from 'react';

const App = () => {

  const [identificador, setIdentificador] = useState(null)
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/category/people" element={<People identificador={identificador} setIdentificador={setIdentificador}/> } />
            <Route path="/category/vehicles" element={<Vehicles identificador={identificador} setIdentificador={setIdentificador}/>} />
            <Route path="/category/planets" element={<Planets identificador={identificador} setIdentificador={setIdentificador}/>} />
            <Route
              path="/category/people/details/:index"
              element={<DetailsPeople identificador={identificador} setIdentificador={setIdentificador}/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default injectContext(App);
