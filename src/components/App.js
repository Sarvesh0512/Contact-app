import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  // 👇 Load from localStorage initially using lazy initialization
  const [contacts, setContacts] = useState(() => {
    const retrievedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return retrievedContacts ? JSON.parse(retrievedContacts) : [];
  });

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  // 💾 Save to localStorage whenever contacts change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // ➕ Add new contact
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: Date.now(), ...contact }]);
  };

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
