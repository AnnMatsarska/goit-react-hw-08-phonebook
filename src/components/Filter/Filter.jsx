import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    return dispatch(contactsFilter(evt.target.value));
  };

  return (
    <>
      <Label htmlFor="search">Find contacts by name:</Label>
      <Input
        id="search"
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Search"
      />
    </>
  );
};
