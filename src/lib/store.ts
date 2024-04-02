import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import taskReducer from "./task/taskSlice";

const taskConfig = {
  key: "taskData",
  storage,
};

const store = configureStore({
  reducer: {
    task: persistReducer(taskConfig, taskReducer),
  },
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export { persistor, store };
