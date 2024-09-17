import { useState, useEffect } from "react";
import { Search, StyledSearchIcon, Input } from "./styled";
import { useLocation } from "react-router-dom";
import { useQueryParameter, useUpdateQueryParameter } from './useQueryParameter';

const SearchField = () => {
    const query = useQueryParameter("query");
    const location = useLocation();
    const updateQueryParameter = useUpdateQueryParameter();

    const [inputValue, setInputValue] = useState(query || "");

    const placeholder = location.pathname.startsWith("/movies")
        ? "Search for movies..."
        : "Search for people...";

    useEffect(() => {
        setInputValue(query || "");
    }, [query, location.pathname]);

    const handleInputChange = (event) => {
        let value = event.target.value;

        value = value.replace(/^\s+/, "");

        setInputValue(value);

        updateQueryParameter({
            key: "query",
            value: value.trim() || undefined,
            resetPage: true
        });
    };

    return (
        <Search>
            <StyledSearchIcon />
            <Input
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
            />
        </Search>
    );
};

export default SearchField;