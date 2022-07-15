import { BrowserRouter, Routes, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div className="container">
      <Navbar />
    </div>
  );
};

export default injectContext(App);
