import ContactForm from "../../components/Contacts/ContactForm";
import ContactsList from "../../components/Contacts/ContactsList";
import { useAppSelector } from "../../hooks/redux";
import NoContacts from "../../components/Contacts/NoContacts";

/* Layout components for /contacts route */
export const Contacts = () => {
  const { contacts } = useAppSelector((state) => state);
  return (
    <div className="flex flex-col items-center gap-10">
      <ContactForm type="create" />
      {contacts.length !== 0 ? <ContactsList /> : <NoContacts />}
    </div>
  );
};
