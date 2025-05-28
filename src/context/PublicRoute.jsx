import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const GuestRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return 

  return !user ? children : <Navigate to="/home" replace />;
};

export default GuestRoute;
