import React, { useState } from 'react';
import './App.css';
import AddContacts from './components/AddContacts';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const [contacts, setContact] = useState([])

  const addContact = (data) => {
    setContact([data]);
  }
  return (
    <div>
     <Header/>
     <AddContacts addContact={addContact}/>
     <ContactList contact={contacts}/>
    </div>
  );
}

export default App;
