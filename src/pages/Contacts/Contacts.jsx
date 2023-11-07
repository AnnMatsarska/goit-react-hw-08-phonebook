import { ContactForm } from 'components/Contacts/ContactForm';

import { Container } from 'components/AppBar/AppBar.styled';
import { SpanText, Title, Section } from './Contacts.styled';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsThunk } from 'redux/contacts/operations';

import { ContactList } from 'components/Contacts/ContactsList';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Section>
          <Title>
            PHONE<SpanText>BOOK</SpanText>
          </Title>
          <ContactForm />
          <ContactList />
        </Section>
      </Container>
    </>
  );
};

export default ContactsPage;
