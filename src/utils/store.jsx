import { configureStore } from "@reduxjs/toolkit";
import editorSlice from "./editorSlice";

const store = configureStore({
  reducer: {
    editor: editorSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
