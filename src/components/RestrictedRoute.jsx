import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/auth/selectors';

export const RestrictedRoute = ({ children, redirectTo = '/contacts' }) => {
  const isAuthenticated = useSelector(selectAuthAuthenticated);

  return isAuthenticated ? <Navigate to={redirectTo} replace /> : children;
};
