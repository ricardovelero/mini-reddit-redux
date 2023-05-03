import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../../components/title/Title";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { setSearchTerm } from "../../app/redditSlice";
import { Subreddits } from "../Subreddits/Subreddits";

const Header = () => {
    const [searchValue, setSearchValue] = useState("");
    const searchTerm = useSelector((state) => state.reddit.searchTerm);
    const dispatch = useDispatch();

    useEffect(() => {
        setSearchValue(searchTerm);
    }, [searchTerm]);

    const onSearchTermChange = (e) => {
        setSearchValue(e.target.value);
    };

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchValue));
    };

    return (
        <header className="bg-white mt-4">
            <div className="mx-auto max-w-7xl">
                <Title />
            </div>
            <div className="mx-auto max-w-7xl">
                {/* <Subreddits /> */}
                <form
                    className="relative max-w-lg mx-auto"
                    onSubmit={onSearchTermSubmit}>
                    <label
                        htmlFor="name"
                        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
                        Search
                    </label>
                    <input
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        type="text"
                        name="search"
                        id="search"
                        placeholder="search posts"
                        value={searchValue}
                        onChange={onSearchTermChange}
                        aria-label="Search posts"
                    />
                    <button
                        type="submit"
                        onClick={onSearchTermSubmit}
                        aria-label="Search">
                        <DocumentMagnifyingGlassIcon />
                    </button>
                </form>
            </div>
        </header>
    );
};

export default Header;
