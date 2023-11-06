import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Header } from './AppBar.styled';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/auth/selectors';

export const AppBar = () => {
  const isAuthenticated = useSelector(selectAuthAuthenticated);
  return (
    <Header>
      <Navigation />
      <AuthNav />
      {isAuthenticated && <UserMenu />}
    </Header>
  );
};
