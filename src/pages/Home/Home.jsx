import { Link } from 'react-router-dom';
import { Title, SubTitle, Wrapper, SpanText } from './Home.styled';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/auth/selectors';

const HomePage = () => {
  const isAuthenticated = useSelector(selectAuthAuthenticated);
  return (
    <>
      <Wrapper>
        <Title>
          Welcome to the Online Phone<SpanText>BOOK</SpanText>
        </Title>

        {isAuthenticated ? (
          <SubTitle>CREATE - STORE - FIND</SubTitle>
        ) : (
          <SubTitle>
            <Link
              to="/register"
              style={{
                textDecoration: 'none',
                color: 'rgb(37, 32, 73)',
              }}
            >
              Register
            </Link>{' '}
            or
            <Link
              to="/login"
              style={{
                textDecoration: 'none',
                color: 'rgb(37, 32, 73)',
              }}
            >
              {' '}
              sign in{' '}
            </Link>
            to manage your contacts.
          </SubTitle>
        )}
      </Wrapper>
    </>
  );
};

export default HomePage;
