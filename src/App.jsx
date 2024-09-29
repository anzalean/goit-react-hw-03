import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import ContactForm from './components/ContactForm/ContactForm'

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');

  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
   const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchValue={searchTerm} handleSearchChange={setSearchTerm} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact}/>
    </>
  )
}

export default App
