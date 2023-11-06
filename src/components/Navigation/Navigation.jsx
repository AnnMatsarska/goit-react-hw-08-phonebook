import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/auth/selectors';

import { NavList } from './Navigation.styled';

export const Navigation = () => {
  const isAuthenticated = useSelector(selectAuthAuthenticated);
  return (
    <>
      <nav>
        <NavList>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {isAuthenticated && <NavLink to="/contacts">Contacts</NavLink>}
          </li>
        </NavList>
      </nav>
    </>
  );
};
