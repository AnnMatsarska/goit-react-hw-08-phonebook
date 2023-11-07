import Button from '@mui/material/Button';
import styled from '@emotion/styled';

export const StyledButton = styled(Button)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: rgb(37, 32, 73);
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: rgb(207, 149, 11);
   
  }
  `}
`;
