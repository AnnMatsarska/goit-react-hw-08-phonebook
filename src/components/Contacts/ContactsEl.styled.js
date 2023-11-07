import styled from 'styled-components';

// -----------Form Component------//

export const Form = styled.form`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;

  color: rgb(37, 32, 73);
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 700;
`;

export const Input = styled.input`
  display: block;
  width: 300px;

  border: 1px solid rgb(207, 149, 11);

  border-radius: 6px;
  margin-top: 6px;
  padding: 6px 8px;
`;

export const Button = styled.button`
  display: block;
  margin-top: 20px;

  padding: 6px 8px;
  cursor: pointer;
  font-weight: 700;
  color: white;
  background-color: rgb(207, 149, 11);
  border: none;
  border-radius: 6px;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &: hover {
    background-color: rgb(56, 52, 94);
  }
`;
