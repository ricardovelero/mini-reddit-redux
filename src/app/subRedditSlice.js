import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getSubreddits } from "../api/reddit";

const initialState = {
    subreddits: [],
    error: false,
    isLoading: false,
};

const subRedditSlice = createSlice({
    name: "redditPosts",
    initialState,
    reducers: {},
});

export default subRedditSlice.reducer;
