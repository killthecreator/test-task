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
    editContact: (state, action: PayloadAction<ContactData>) => {
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },

    deleteContact: (state, action: PayloadAction<ContactData["id"]>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, editContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
