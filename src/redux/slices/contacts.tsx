import { createSlice } from "@reduxjs/toolkit";
import { ContactData } from "~/types";
import type { PayloadAction } from "@reduxjs/toolkit";

export const initialState: ContactData = {
  title: "",
  image: undefined,
  persons: "",
  price: "",
  text: "",
  location: "",
  date: "",
  smoking: false,
  pets: false,
};

export const contactSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<ContactData>) => action.payload,
  },
});

export const { setFormData } = contactSlice.actions;
export default contactSlice.reducer;
