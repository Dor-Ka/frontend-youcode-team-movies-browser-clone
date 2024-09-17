import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../../constants/config";
import { useQueryParameter } from "../Navigation/Search/useQueryParameter";
import { useLocation } from "react-router-dom";
import { errorStatus, loadingStatus, successStatus } from "../../constants/requestStatuses";

export const useFetchSearchResult = () => {
    const query = useQueryParameter("query");
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const isMoviesPage = location.pathname.startsWith("/movies");
    const currentPage = parseInt(searchParams.get("page")) || 1;

    const [searchResults, setSearchResults] = useState({
        status: "",
        data: [],
    });
    useEffect(() => {
        setSearchResults({
            status: loadingStatus,
            data: [],
        });

        const fetchData = async () => {
            const url = `${BASE_URL}/search/${isMoviesPage ? "movie" : "person"}?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${currentPage}`;

            try {
                const response = await axios.get(url);
                setSearchResults({ status: successStatus, data: response.data });
            } catch (error) {
                setSearchResults({ status: errorStatus, data: null });
                console.error("Error fetching search results:", error.message);
            }
        };

        const debounceTimeout = setTimeout(fetchData, 500);

        return () => clearTimeout(debounceTimeout);
    }, [query, isMoviesPage, currentPage]);

    return { searchResults };
};