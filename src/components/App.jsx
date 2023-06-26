import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, filterContact } from 'redux/store';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const onSubmitContact = ({ name, number }) => {
    createContact({
      name: name,
      number: number,
    });
  };

  const createContact = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    dispatch(add(newUser));
  };

  const handleNameInput = ({ target }) => {
    onChange(target.value);
  };

  const onChange = query => {
    dispatch(filterContact(query));
  };

  const getContactBySearch = () => {
    const filteredContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    // const filteredContact = dispatch(filterContact(contacts))
    return filteredContact;
  };

  const handleDelete = id => {
    dispatch(remove(id));
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Form onSubmitContact={onSubmitContact} />
      <h2>Contacts</h2>
      <Filter handleNameInput={handleNameInput} />
      <ContactList
        contacts={getContactBySearch()}
        handleDelete={handleDelete}
      />
    </>
  );
};
