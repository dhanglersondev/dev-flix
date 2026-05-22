import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Filme from './pages/Filme'; 
import Error from './pages/Error';

import DefaultLayout from './layout/DefaultLayout';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:id" element={<Filme />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;