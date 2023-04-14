import { configureStore, combineReducers } from "@reduxjs/toolkit";

import MainReducer from "../reducers";

const rootReducer = combineReducers({
  redBasic: MainReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;









