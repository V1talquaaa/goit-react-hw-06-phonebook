import { nanoid } from 'nanoid';
import { useState } from 'react';
import './Form.module.css'
import { useDispatch } from 'react-redux';
import { add } from 'redux/contacts/contactSlice';


const Form = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')


 const onChange = ({target: {name, value}}) => {
    if(name === 'name') {
      setName(value)
    } else if(name === 'number') {
      setNumber(value)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitContact({name:name, number:number})
    setName('')
    setNumber('')
  }



const onSubmitContact = ({ name, number }) => {
  const newUer = {
    name: name,
    number: number,
  };
  dispatch(add(newUer));
};


    return (
      <form action="" onSubmit={onSubmit}>
        <label htmlFor={nanoid()}></label>
        <input
          type="text"
          id={nanoid()}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
          value={name}
          placeholder='Name'
        />
        <label htmlFor={nanoid()}></label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChange}
          value={number}
          placeholder='Number'
        />
  
        <button type='submit'>
          Add contact
        </button>
      </form>
    );
  };
  

export { Form };




