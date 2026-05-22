import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Filme from './Pages/Filme'; 

import Header from './components/Header';

function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme" element={<Filme />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;