import { BrowserRouter, Routes, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default injectContext(App);
