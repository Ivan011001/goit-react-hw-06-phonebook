import Section from './Section';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

export default function App() {
  return (
    <div>
      <Section>
        <ContactForm />
      </Section>
      <Section>
        <ContactList />
      </Section>
    </div>
  );
}
