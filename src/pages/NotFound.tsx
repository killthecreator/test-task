import { Card, CardTitle, CardDescription, CardContent } from "~/components/ui";
import { XCircle } from "lucide-react";

export const NotFound = () => {
  return (
    <Card className="p-5 sm:p-10 flex items-center gpa-2 sm:gap-5">
      <XCircle className="w-10 h-10" />
      <CardContent className="pt-6">
        <CardTitle className="mb-5">404</CardTitle>
        <CardDescription>Page does not exist</CardDescription>
      </CardContent>
    </Card>
  );
};
