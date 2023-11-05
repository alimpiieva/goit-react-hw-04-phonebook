import React, { useState } from 'react';
import { LabelForm, Label, InputField, SubmitButton } from './ContactForm.styled';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <LabelForm onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="name">Name</Label>
        <InputField
          type="text"
          id="name"
          name="name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name can only contain letters, apostrophes, hyphens, and spaces. For example, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="number">Phone Number</Label>
        <InputField
          type="tel"
          id="number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number should only contain digits and may include spaces, hyphens, parentheses, and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </div>
      <SubmitButton type="submit">Add Contact</SubmitButton>
    </LabelForm>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
