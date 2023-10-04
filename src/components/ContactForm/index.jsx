import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export default function ContactForm() {
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const tel = form.elements.tel.value;
    dispatch(addContact(name, tel));
    form.reset();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" name="name" required />
      <input type="tel" name="tel" required />
      <button>Add</button>
    </form>
  );
}
