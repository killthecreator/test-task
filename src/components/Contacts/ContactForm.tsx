import { useForm } from "react-hook-form";
import { useState } from "react";
import { cn } from "./../../lib/utils";
import type { ContactData } from "~/types";
import { useAppDispatch } from "./../../hooks/redux";
import { addContact } from "./../../redux/slices/contacts";

const ContactForm = () => {
  const dispatch = useAppDispatch();

  const [isPopup, setPopup] = useState(false);

  const handleClick = () => {
    setPopup(true);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactData>();

  const onSubmit = (data: ContactData) => {
    dispatch(addContact(data));

    reset();
    setPopup(false);
  };
  return (
    <>
      <button onClick={handleClick}>Create Contact</button>
      <form
        className={cn(
          "fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center bg-slate-500 rounded-md gap-5 p-10",
          !isPopup && "hidden"
        )}
        onSubmit={handleSubmit(onSubmit)}
      >
        <legend>Create contact</legend>
        <fieldset className="flex gap-5">
          <label>First Name:</label>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstname")}
            className={cn(
              "p-1 rounded-md",
              errors.firstname && "outline-red-500"
            )}
            required
          />
        </fieldset>
        <fieldset className="flex gap-5">
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastname")}
            className={cn(
              "p-1 rounded-md",
              errors.lastname && "outline-red-500"
            )}
            required
          />
        </fieldset>
        <fieldset className="flex items-center gap-5">
          <label>Status</label>
          <ul>
            <li key="1" className="flex items-center gap-3">
              <input
                type="radio"
                value="active"
                {...register("active")}
                defaultChecked
              />
              <label>Active</label>
            </li>
            <li key="2" className="flex items-center gap-3">
              <input type="radio" value="inactive" {...register("active")} />
              <label>Inactive</label>
            </li>
          </ul>
        </fieldset>
        <button
          type="submit"
          className="border border-slate-700 rounded-md p-1"
        >
          Save contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
