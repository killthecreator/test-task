import { configureStore } from "@reduxjs/toolkit";
import contactsSliceReducer from "./slices/contacts";
import chartsNMapsReducer from "./slices/chartsNMaps";

const store = configureStore({
  reducer: { contacts: contactsSliceReducer, chartsNMaps: chartsNMapsReducer },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
