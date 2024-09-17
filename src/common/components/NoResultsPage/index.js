import { Container, Image, Legend } from "./styled"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { queryKey } from "../../constants/queryKey";

export const NoResults = () => {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const query = new URLSearchParams(location.search).get(queryKey);
        if (query && query !== searchQuery) {
            setSearchQuery(query);
        }
    }, [location, searchQuery]);

    return (
        <Container>
            <Legend>
            {searchQuery ? `Sorry, there are no results for “${searchQuery}”` : "Sorry, there are no results"}
            </Legend>
            <Image />
        </Container>
    )
}