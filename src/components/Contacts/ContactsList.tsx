import { useAppSelector } from "./../../hooks/redux";
import ContactCard from "./ContactCard";
import { v4 as uuidv4 } from "uuid";

const ContactsList = () => {
  const contacts = useAppSelector((state) => state.contacts);

  return (
    <ul className="grid grid-cols-3">
      {contacts.map((contact) => (
        <li key={uuidv4()}>
          <ContactCard {...contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactsList;
