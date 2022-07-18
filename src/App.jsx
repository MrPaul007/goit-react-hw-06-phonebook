import { useSelector, useDispatch } from 'react-redux';

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

import { add, remove, changeFilter  } from "./redux/contacts/contacts-slice";
import { getAllContacts, getFilteredContacts } from "./redux/contacts/contacts-selectors";

function App() {
  const contacts = useSelector(getAllContacts);
  const visibleContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onAddContact = ( data ) => { 
    const { name } = data;  
    const isMached = contacts.find(item => item.name.toLowerCase() === name.toLowerCase());
    isMached ? alert(`${name} is already in contacts`) : 
    dispatch(add(data))
  };

  const onDeleteContact = (contactId) => {
    dispatch(remove(contactId))
  };

  const onFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact}/>
      <h2>Contacts</h2>
      <Filter onChange={onFilterChange}/>
      <ContactList contacts={visibleContacts} onDelete={onDeleteContact} />
    </div>
  );
};

export default App;