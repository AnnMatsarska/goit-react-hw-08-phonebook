import { Link } from 'react-router-dom';
import { Title, SubTitle, Wrapper, SpanText } from './Home.styled';

const HomePage = () => {
  return (
    <>
      <Wrapper>
        <Title>
          Welcome to the Online Phone<SpanText>BOOK</SpanText>
        </Title>

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
      </Wrapper>
    </>
  );
};

export default HomePage;
