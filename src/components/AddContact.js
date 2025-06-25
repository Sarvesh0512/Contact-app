import React from 'react';

class AddContact extends React.Component {
  state = {
    name: '',
    email: ''
  };

  add = (e) => {
    e.preventDefault();
    const { name, email } = this.state;

    if (name.trim() === '' || email.trim() === '') {
      alert("All fields are mandatory!");
      return;
    }

    this.props.addContactHandler({ name, email });
    this.setState({ name: '', email: '' });
  };

  render() {
    return (
      <div className='ui main' style={{ marginTop: "20px" }}>
        <h2 className='ui header'>Add Contact</h2>
        <form className='ui form' onSubmit={this.add}>
          <div className='field'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className='ui button blue' type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
