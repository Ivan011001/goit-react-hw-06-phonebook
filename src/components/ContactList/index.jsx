import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/actions';

export default function ContactList() {
  const contacts = useSelector(getContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactListItem contact={contact} />
        </li>
      ))}
    </ul>
  );
}
