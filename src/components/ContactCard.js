import React from 'react';

// Placeholder image for user avatar
const defaultAvatar = 'https://cdn-icons-png.flaticon.com/512/149/149071.png'; // rounded user icon

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className='item' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0' }}>
      <div className='ui avatar image'>
        <img src={defaultAvatar} alt='user' />
      </div>
      <div className='content' style={{ flex: 1, marginLeft: '1rem' }}>
        <div className='header' style={{ fontSize: '1.2rem' }}>{name}</div>
        <div>{email}</div>
      </div>
      <i
        className='trash alternate outline icon'
        style={{
          color: 'orangered',
          fontSize: '1.2rem',
          cursor: 'pointer',
        }}
        title='Delete Contact'
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
