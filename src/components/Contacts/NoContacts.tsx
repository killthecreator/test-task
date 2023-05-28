import { Card, CardTitle, CardDescription, CardContent } from "../ui";
import { XCircle } from "lucide-react";

const NoContacts = () => {
  return (
    <Card className="p-10 flex items-center gap-5">
      <XCircle className="w-10 h-10" />
      <CardContent className="pt-6">
        <CardTitle className="mb-5">Not contacts found</CardTitle>
        <CardDescription>
          Plese add contact from Create Contact button
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default NoContacts;
