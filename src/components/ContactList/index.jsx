import ContactFilter from 'components/ContactFilter';
import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/actions';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <>
      <ContactFilter />
      <ul>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <ContactListItem contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
