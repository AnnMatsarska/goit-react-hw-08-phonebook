import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/auth/selectors';

export const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const isAuthenticated = useSelector(selectAuthAuthenticated);

  return isAuthenticated ? children : <Navigate to={redirectTo} replace />;
};
