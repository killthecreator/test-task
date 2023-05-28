import { createSlice } from "@reduxjs/toolkit";
import { ContactData } from "~/types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: ContactData[] = [];

export const chartsNMapsSlice = createSlice({
  name: "chartsNMaps",
  initialState,
  reducers: {
    addMap: (state, action: PayloadAction<ContactData>) => {
      state.push(action.payload);
    },
  },
});

export const { addMap } = chartsNMapsSlice.actions;
export default chartsNMapsSlice.reducer;
