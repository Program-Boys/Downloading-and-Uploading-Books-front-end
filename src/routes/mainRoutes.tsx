import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import PageLogin from '../pages/Login';
import UserdDashboard from '../pages/UserDashboard';

const MainRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<PageLogin />} />
      <Route path="/user-homepage" element={<UserdDashboard />} />
    </Routes>
  );
};

export default MainRoutes;
