import { useForm } from "react-hook-form";
import { useAppSelector } from "~/hooks/redux";
import { useState } from "react";
import { cn } from "~/lib/utils";

const ContactForm = () => {
  const formData = useAppSelector((state) => state.contact);
  const [isPopup, setPopup] = useState(false);

  const handleClick = () => {
    setPopup(true);
  };

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: formData });
  return (
    <>
      <button onClick={handleClick}>Create Contact</button>
      <form
        className={cn(
          "fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
          !isPopup && "hidden"
        )}
      ></form>
    </>
  );
};

export default ContactForm;
