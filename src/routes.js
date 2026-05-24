import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/index';
import Filme from './Pages/Filme/index';
import Favoritos from './Pages/Favoritos/index';

import Error from './Pages/Error/index';

import DefaultLayout from './layout/DefaultLayout';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<Filme />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;