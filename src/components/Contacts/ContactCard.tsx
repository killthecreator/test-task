import { ContactData } from "~/types";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  Button,
  CardContent,
} from "../ui";
import ContactForm from "./ContactForm";
import { deleteContact } from "./../../redux/slices/contacts";
import { useAppDispatch } from "./../../hooks/redux";
import { Link } from "react-router-dom";

const ContactCard = ({ firstname, lastname, active, id }: ContactData) => {
  const dispatch = useAppDispatch();
  return (
    <Card className="max-w-lg w-[250px]">
      <CardHeader>
        <CardTitle>{`${firstname} ${lastname}`}</CardTitle>
        <CardDescription>{active}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Button variant="outline">
          <Link to={`/contacts/${id}`}>More contact details</Link>
        </Button>
        <ContactForm type="edit" id={id} />
        <Button
          onClick={() => dispatch(deleteContact(id))}
          variant="destructive"
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};
export default ContactCard;
