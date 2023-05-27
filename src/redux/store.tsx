import { configureStore } from "@reduxjs/toolkit";
import contactsSliceReducer from "./slices/contacts";

const store = configureStore({
  reducer: { contacts: contactsSliceReducer },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
