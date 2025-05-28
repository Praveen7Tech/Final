import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return 

  return user ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
