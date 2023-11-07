import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  gap: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: Helvetica Neue;
  color: rgb(37, 32, 73);
  font-weight: 700;
  font-size: 20px;
  outline: none;
  padding: 8px 12px;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 15px;
  transition: all 300ms;

  &:hover,
  &:focus {
    background-color: rgb(207, 149, 11, 0.7);

    border-radius: 15px;
  }

  &.active {
    background-color: rgb(207, 149, 11, 0.7);

    border-radius: 15px;
  }
`;
