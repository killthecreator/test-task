import { createSlice } from "@reduxjs/toolkit";
import { ContactData } from "~/types";
import type { PayloadAction } from "@reduxjs/toolkit";

export const initialState: ContactData[] = [];

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactData>) => {
      state.push(action.payload);
    },
  },
});

export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;
