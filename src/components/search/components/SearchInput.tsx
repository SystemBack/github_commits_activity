import { KeyboardEventHandler, useState } from "react";
import { ENTER_KEY } from "../../../utils/constants";
import SearchIcon from "../../../icons/SearchIcon";
import fetchData from "../../../utils/fetchRepositories";
import LoadIcon from "../../../icons/LoadIcon";

function SearchInput({ handleSearchedItems}) {
    const [isLoader, setIsLoader] = useState(false)
    const resource = fetchData();

    const handleFetchRepositories = (e: KeyboardEventHandler) => {
        const value = e.target?.value
        if(value !== undefined) handleSearchedItems([]);
        if(ENTER_KEY !== e.code) return;
        setIsLoader(true);
        resource.getRepositories(value)
        .then((data) => {
            handleSearchedItems(data);
            setIsLoader(false);
        })
        .catch((error) => console.error(error))
    }

    return (
        <label className="relative block w-full">
            <span className="absolute inset-y-0 left-0 flex pl-3 pt-2">
                <SearchIcon />
            </span>
            <input className="
                    placeholder:italic
                    placeholder:text-slate-400
                    text-slate-500
                    block
                    bg-white
                    w-full
                    border
                    border-slate-300
                    py-2
                    pl-10
                    pr-3
                    shadow-sm
                    focus:outline-none
                    focus:border-teal-500
                    focus:ring-teal-500
                    focus:ring-1
                    sm:text-md"
                placeholder="Search something and press enter..."
                type="text"
                name="search"
                onKeyUp={handleFetchRepositories}
            />
            {isLoader && (
            <span className="absolute inset-y-0 right-0 flex pr-3 pt-2">
                <LoadIcon />
            </span>
            )}
        </label>
    )
}

export default SearchInput;
