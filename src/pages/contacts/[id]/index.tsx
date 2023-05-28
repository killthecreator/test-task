import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "./../../../hooks/redux";
import { useEffect } from "react";
import ContactCard from "./../../../components/Contacts/ContactCard";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardHeader,
} from "./../../../components/ui";

const ContactDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { contacts } = useAppSelector((state) => state);

  const curContact = contacts.find((contact) => contact.id === id);

  useEffect(() => {
    if (!curContact) navigate("/404");
  });

  if (!curContact) throw new Error("Contact not found");

  return (
    <div className="flex justify-center items-center ">
      <Card className="p-10 w-full max-w-[600px] text-center">
        <CardHeader>
          <CardTitle>{`${curContact.firstname} ${curContact.lastname}`}</CardTitle>
          <CardDescription>{`Contact is ${curContact.active}`}</CardDescription>
        </CardHeader>
        <CardContent>Contact details...</CardContent>
      </Card>
    </div>
  );
};
export default ContactDetails;
