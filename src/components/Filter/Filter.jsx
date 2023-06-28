import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css'
import { filterContact } from 'redux/store';
import { updateContactList } from 'redux/contacts/contactSlice';



const Filter = () => {
    const dispatch= useDispatch()
    const contacts = useSelector(state => state.contacts.contacts)
    const filter = useSelector(state => state.filter)

    const handleNameInput = ({ target }) => {
        onChange(target.value);
      };
      const onChange = query => {
        dispatch(filterContact(query));
        getContactBySearch()
      };

      const getContactBySearch = () => {
        console.log(contacts)
        const filteredContactsList = contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
        console.log(filteredContactsList)

      };
      
    return (
            <input type="text" name="filter" onChange={handleNameInput} placeholder='Search by name' className={css.filterContact}/>
        )
    }
    
    export { Filter }
