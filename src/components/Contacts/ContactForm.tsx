import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { cn } from "./../../lib/utils";
import type { ContactData } from "~/types";
import { useAppDispatch } from "./../../hooks/redux";
import { addContact, editContact } from "./../../redux/slices/contacts";
import { Card, CardTitle, Input, Label, Button } from "./../../components/ui";
import { XCircle } from "lucide-react";

import { v4 as uuidv4 } from "uuid";

type ContactFormProps = {
  type: "edit" | "create";
  id?: string;
};

/* Form has two modes: "create" and "edit" to make corresponding 
actions with contact cards respectively. The only things that 
are changing between two modes is what action will be dispatched 
on submit and some text fields inside the form. To edit a contact
you need to also prove its ID.
 */
const ContactForm = ({ type, id = "" }: ContactFormProps) => {
  const dispatch = useAppDispatch();
  const [isPopup, setPopup] = useState(false);
  const closeBtn = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactData>();

  /* Form submit handler */
  const onSubmit = (data: ContactData) => {
    setPopup(false);
    switch (type) {
      case "create":
        dispatch(addContact({ ...data, id: uuidv4() }));
        break;
      case "edit":
        dispatch(editContact({ ...data, id }));
        break;
    }
    reset();
  };

  /* Handler for closing popup before submit: can be closed via clicking on
  the cross button or outside the popup */
  const handleClose = (e: React.SyntheticEvent<HTMLElement>) => {
    if (
      (closeBtn.current && e.target === closeBtn.current) ||
      e.target === e.currentTarget
    ) {
      setPopup(false);
      reset();
    }
  };
  return (
    <>
      <Button
        className={cn(type === "create" && "sm:self-start")}
        onClick={() => setPopup(true)}
      >
        {type === "create" && "Create Contact"}
        {type === "edit" && "Edit"}
      </Button>
      <div
        className={cn(
          "w-screen h-screen fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center z-50 bg-background/80 backdrop-blur-sm",
          !isPopup && "hidden"
        )}
        onClick={handleClose}
      >
        <Card
          className={
            " lg:max-w-[500px] w-full max-w-[350px] shadow-xl relative mx-4"
          }
        >
          <XCircle
            className="absolute top-5 right-5 cursor-pointer"
            ref={closeBtn}
          />
          <form
            className={"flex flex-col items-center gap-6 md:gap-8 p-10"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <CardTitle>
              {type === "create" && "Create Contact"}
              {type === "edit" && "Edit Contact"}
            </CardTitle>
            <fieldset className="grid md:grid-cols-[auto_1fr] items-center gap-2 md:gap-5">
              <Label htmlFor="firstname" className="w-max">
                First Name:
              </Label>
              <Input
                type="text"
                id="firstname"
                placeholder="First Name"
                {...register("firstname", {
                  required: "Firstname is required",
                })}
                className={
                  errors.firstname &&
                  "ring-red-500 ring-offset-red-500  ring-2 focus-visible:ring-0"
                }
              />
            </fieldset>
            <fieldset className="grid md:grid-cols-[auto_1fr] items-center gap-2 md:gap-5">
              <Label htmlFor="lastname">Last Name:</Label>
              <Input
                type="text"
                id="lastname"
                placeholder="Last Name"
                {...register("lastname", { required: "Lastname is required" })}
                className={
                  errors.lastname &&
                  "ring-red-500 ring-offset-red-500 ring-2 focus-visible:ring-0"
                }
              />
            </fieldset>
            <fieldset className="flex items-center gap-5">
              <Label>Status</Label>
              <fieldset className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <input
                    defaultChecked
                    type="radio"
                    value="active"
                    id="active"
                    {...register("active")}
                  />
                  <Label htmlFor="active">Active</Label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    value="inactive"
                    id="inactive"
                    {...register("active")}
                  />
                  <Label htmlFor="inactive">Inactive</Label>
                </div>
              </fieldset>
            </fieldset>
            <Button type="submit">
              {type === "create" && "Save Contact"}
              {type === "edit" && "Save Edited Contact"}
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default ContactForm;
