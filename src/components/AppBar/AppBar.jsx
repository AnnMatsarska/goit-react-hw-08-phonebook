import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Container, HeaderNav } from './AppBar.styled';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/auth/selectors';

export const AppBar = () => {
  const isAuthenticated = useSelector(selectAuthAuthenticated);
  return (
    <header>
      <Container>
        <HeaderNav>
          <Navigation />
          {isAuthenticated && <UserMenu />}
        </HeaderNav>
      </Container>
    </header>
  );
};
