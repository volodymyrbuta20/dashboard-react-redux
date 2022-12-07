import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { newApplicantSlice } from "../slice/newApplicant";
import { screeningSlice } from "../slice/screening";
import { interviewSlice } from "../slice/interview";

export const store = configureStore({
  reducer: combineReducers({
    newApplicant: newApplicantSlice.reducer,
    screening: screeningSlice.reducer,
    interview: interviewSlice.reducer,
  }),
  devTools: process.env.NODE_ENV !== "production"
});