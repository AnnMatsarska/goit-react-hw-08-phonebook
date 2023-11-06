import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth/selectors';

import { Wrapper } from './UserMenu.styled';
import { logoutThunk } from 'redux/auth/operations';

export const UserMenu = () => {
  const user = useSelector(selectAuthUserData);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logoutThunk())}>
        Log Out
      </button>
    </Wrapper>
  );
};
