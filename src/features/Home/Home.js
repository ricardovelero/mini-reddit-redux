import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import Post from "../Post/Posts";
import PostLoading from "../Post/PostLoading";
import {
    fetchPosts,
    selectFilteredPosts,
    setSearchTerm,
    fetchComments,
} from "../../app/redditSlice";

const Home = () => {
    const reddit = useSelector((state) => state.reddit);
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
            dispatch(fetchComments(index, permalink));
        };

        return getComments;
    };

    if (isLoading) {
        return <PostLoading />;
    }

    if (error) {
        return (
            <div className="error">
                <h2>Failed to load posts.</h2>
                <button
                    type="button"
                    onClick={() => dispatch(fetchPosts(selectedSubreddit))}>
                    Try Again
                </button>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="error">
                <h2>No posts matching {searchTerm}</h2>
                <button
                    type="button"
                    onClick={() => dispatch(setSearchTerm(""))}>
                    Go Home
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white py-2 sm:py-2">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <ul className="space-y-3">
                    {posts.map((post, index) => (
                        <Post
                            post={post}
                            onToggleComments={onToggleComments(index)}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
