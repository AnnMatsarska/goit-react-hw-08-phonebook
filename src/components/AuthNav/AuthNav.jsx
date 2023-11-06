import { NavLink } from 'react-router-dom';
import { AuthNavWrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Sign In</NavLink>
    </AuthNavWrapper>
  );
};
