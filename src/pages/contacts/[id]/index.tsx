import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "./../../../hooks/redux";
import { useEffect } from "react";
import Loading from "./../../../components/loading";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardHeader,
} from "./../../../components/ui";

/* Component for dynamic route with certain contact ID details */
const ContactDetails = () => {
  /* Getting current ID from pathname */
  const { id } = useParams();
  const navigate = useNavigate();

  const { contacts } = useAppSelector((state) => state);
  /* Trying to find the ID in our local contacts database */
  const curContact = contacts.find((contact) => contact.id === id);

  /* Redirecting to 404 page if ID is not found */
  useEffect(() => {
    if (!curContact) {
      navigate("/404");
    }
  }, [curContact, navigate]);

  /* Loading for the redirection, since it's not immediate */
  if (!curContact) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loading />
      </div>
    );
  }

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
