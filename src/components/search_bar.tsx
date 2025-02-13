import { faArrowLeft, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useEffect, useState } from "react";
import UserInterface from "~/interfaces/user";
import { useDebounce } from "../hooks";
import constants from "~/config/constant";
interface SearchBarProps {
    onFocusedSearchBar: (isFocused: boolean) => void;
    onChangeTextSearchBar: (text: string) => void;
    onGetResultSearchBar: (resultSearch: Partial<UserInterface>[]) => void; // Use Partial<User> here
}

export default function SearchBar({ onFocusedSearchBar, onChangeTextSearchBar, onGetResultSearchBar }: SearchBarProps) {
    const [searchValue, setSearchValue] = useState('');
    const [isFocused, setIsFocused] = useState(false)
    const [resultSearch, setResultSearch] = useState<Partial<UserInterface>[]>([]);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        onChangeTextSearchBar(e.target.value)
    };

    const handleClearText = () => {
        setSearchValue('');
        setIsFocused(false)
        onFocusedSearchBar(false)
        onChangeTextSearchBar('')
    }

    const handleFocus = () => {
        setIsFocused(true)
        onFocusedSearchBar(true)
    };
    const handleComeBack = () => {
        setIsFocused(false)
        onFocusedSearchBar(false)
        onChangeTextSearchBar('')

    }
    const handleResultSearchBar = (newValue: Partial<UserInterface>[]) => {
        setResultSearch(newValue);
        onGetResultSearchBar(newValue);
    };
    const debounced = useDebounce(searchValue, 500)
    useEffect(() => {
        if (!debounced.trim()) {
            handleResultSearchBar([]);
            return
        }
        const url = `${constants.url_api}/users/search?name=${encodeURIComponent(debounced)}`;
        fetch(url, {
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then(async (data) => {
                handleResultSearchBar(data.data.users);
            });
    }, [debounced])
    // useEffect(() => {
    //     console.log(searchValue);

    //     if (!searchValue.trim()) {
    //         return
    //     }
    //     fetch(`http://127.0.0.1:8080/api/v1/users/search?name=${searchValue}`, {
    //         headers: { "Content-Type": "application/json" },
    //     })
    //         .then((res) => res.json())
    //         .then(async (data) => {
    //             handleResultSearchBar(data.data.users);
    //         });
    // }, [searchValue])
    // Effect to run the debouncedFetchData when text changes
  
    return (
        <div className="   pb-4 relative">
            {isFocused && (
                <div
                    onClick={handleComeBack}
                    className="absolute h-10 w-10  left-0  rounded-full p-1 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-opacity duration-300">
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="absolute  w-4 h-4 text-gray-700  cursor-pointer"
                    />
                </div>
            )}
            <form className={` ${isFocused ? 'w-10/12 float-right' : 'w-full '} transition-opacity duration-300`}>
                <div className="relative">
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-3 cursor-pointer"
                    />
                    <input
                        value={searchValue}
                        type="text"
                        onChange={handleChange}
                        onFocus={handleFocus}
                        placeholder="Search Messenger"
                        className="w-full p-2 pl-12 pr-4 bg-slate-100 text-gray-700 border rounded-full outline-none bg-gray-50 focus:border-gray-300"
                    />
                    {searchValue !== '' && (
                        <div onClick={handleClearText} className="absolute top-0 right-0 w-10 h-10 bg-gray-200 rounded-full p-1 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-opacity duration-300">
                            <FontAwesomeIcon
                                icon={faClose}

                                className="w-4 h-4 text-gray-400 cursor-pointer justify-center"
                            />
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}