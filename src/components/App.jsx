import Section from './Section';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

export default function App() {
  return (
    <div>
      <Section title="Add contact">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <ContactList />
      </Section>
    </div>
  );
}
