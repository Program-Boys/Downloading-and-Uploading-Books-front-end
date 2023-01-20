import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import PageLogin from '../pages/Login';

const MainRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<PageLogin />} />
    </Routes>
  );
};

export default MainRoutes;
