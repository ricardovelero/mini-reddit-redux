import { configureStore } from "@reduxjs/toolkit";
import redditReducer from "./redditSlice";
import subRedditSlice from "./subRedditSlice";

export const store = configureStore({
    reducer: {
        reddit: redditReducer,
        subReddit: subRedditSlice,
    },
});
