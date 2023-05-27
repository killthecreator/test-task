import { ContactData } from "~/types";

const ContactCard = ({ firstname, lastname, active }: ContactData) => {
  return (
    <div className="flex flex-col bg-slate-600 rounded-lg">
      <h2>{`${firstname} ${lastname}`}</h2>
      <h3>{active}</h3>

      <div className="flex flex-col">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
export default ContactCard;
