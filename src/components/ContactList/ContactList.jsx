import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { remove } from 'redux/contacts/contactSlice';

const ContactList = () => {

  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts.contacts);

  const handleDelete = (id) => {
    dispatch(remove(id));
  };

  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.contactList}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => handleDelete(id)}
              id={id}
              className={css.deleteBtn}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   handleDelete: PropTypes.func.isRequired,
// };

export { ContactList };

