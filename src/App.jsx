import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Sidenav from './components/Sidenav';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';
import Products from './pages/Products';
// import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/products' exact element={<Products />} />
        <Route path='/settings' exact element={<Settings />} />
        <Route path='/analytics' exact element={<Analytics />} />
      </Routes>
    </>
  );
}

export default App;