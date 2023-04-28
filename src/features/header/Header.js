import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../../components/title/Title";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { setSearchTerm } from "../../app/redditSlice";

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
        <header>
            <Title />
            <form className="search" onSubmit={onSearchTermSubmit}>
                <input
                    className="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
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
        </header>
    );
};

export default Header;
