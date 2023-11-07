import { ContactForm } from 'components/Contacts/ContactForm';

import { Container } from 'components/AppBar/AppBar.styled';
import { SpanText, Title, Section } from './Contacts.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/contacts/operations';

import { ContactList } from 'components/Contacts/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Box } from '@mui/material';
import { selectContacts } from 'redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Box
          component="div"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Section>
            <Title>
              PHONE<SpanText>BOOK</SpanText>
            </Title>
            <ContactForm />
          </Section>
          <Section>
            <Title>CONTACTS</Title>
            {contacts.length !== 0 && (
              <>
                <Filter />
                <ContactList />
              </>
            )}
          </Section>
        </Box>
      </Container>
    </>
  );
};

export default ContactsPage;
