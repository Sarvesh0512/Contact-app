import React from 'react';
import ContactCard from './ContactCard'; // ✅ move this to the top

const ContactList = (props) => {
  const { contacts } = props;
  const deleteContactHandler = (id) => props.getContactId(id);
  const renderContactList = contacts.map((contact) => {
    return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />;
  });

  return (
    <div className='ui celled list'>
      <h2>Contact List</h2>
      {renderContactList}
    </div>
  );
};

export default ContactList;
