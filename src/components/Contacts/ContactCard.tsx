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

const ContactCard = ({ firstname, lastname, active, id }: ContactData) => {
  return (
    <Card className="max-w-lg w-[250px]">
      <CardHeader>
        <CardTitle>{`${firstname} ${lastname}`}</CardTitle>
        <CardDescription>{active}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <ContactForm type="edit" id={id} />
        <Button variant="destructive">Delete</Button>
      </CardContent>
    </Card>
  );
};
export default ContactCard;
