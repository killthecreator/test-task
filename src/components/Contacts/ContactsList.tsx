import { useAppSelector } from "./../../hooks/redux";
import ContactCard from "./ContactCard";

const ContactsList = () => {
  const { contacts } = useAppSelector((state) => state);
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {contacts.map((contact) => (
        <li key={contact.id}>
          <ContactCard {...contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactsList;
