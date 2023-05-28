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

/* Contact card has field with text data, provided on creation/editing
plus three buttons: 
1. Button, redirecting to route for that specific contact with more details
provided
2. Button to edit the contact
3. Button to delete the contact */
const ContactCard = ({ firstname, lastname, active, id }: ContactData) => {
  const dispatch = useAppDispatch();
  return (
    <Card className="max-w-lg w-[250px]">
      <CardHeader>
        <CardTitle>{`${firstname} ${lastname}`}</CardTitle>
        <CardDescription>{active}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Link to={`/contacts/${id}`}>
          <Button className="w-full" variant="outline">
            More contact details
          </Button>
        </Link>

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
