import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Buttons,
    ButtonText,
    ButtonTile,
    Counter,
    CounterNumber,
    CounterText,
    PointerLeft,
    PointerRight,
    Wrapper,
} from "./styled";
import { useFetchSearchResult } from '../SearchProcess/useFetchSearchResult';
import { useQueryParameter } from '../Navigation/Search/useQueryParameter';
import { usePopularActors } from '../../../features/ActorList/components/usePopularActors';
import { usePopularMovies } from '../../../features/MoviesListPage/components/MainContent/usePopularMovies';

export const Pagination = ({ isMoviesPage }) => {
    const isMobile = useMediaQuery({ maxWidth: 600 });
    const navigate = useNavigate();
    const location = useLocation();
    const { searchResults } = useFetchSearchResult();
    const query = useQueryParameter("query");

    const { totalPagesMovies } = usePopularMovies();
    const { totalPagesActor } = usePopularActors();
    const totalSearchPages = +searchResults.data.total_pages;

    const totalPages = query
        ? totalSearchPages
        : isMoviesPage
            ? totalPagesMovies
            : totalPagesActor;

    const searchParams = new URLSearchParams(location.search);
    const currentPage = parseInt(searchParams.get("page")) || 1;

    const [previousQuery, setPreviousQuery] = useState(query);

    useEffect(() => {
        if (query !== previousQuery) {
            navigate(`${location.pathname}?page=1&query=${query}`, { replace: true });
            setPreviousQuery(query);
        } else if (!location.pathname.includes("search") && currentPage === 1) {
            navigate(location.pathname, { replace: true });
        }
    }, [query, previousQuery, currentPage, navigate, location.pathname]);

    const changePage = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            const queryParam = query ? `&query=${query}` : "";
            navigate(`${location.pathname}?page=${newPage}${queryParam}`);
        }
    };

    const renderButton = (onClick, disabled, iconLeft, iconRight, text) => (
        <ButtonTile onClick={onClick} disabled={disabled}>
            {isMobile ? (
                <>
                    {iconLeft}
                    {iconRight}
                </>
            ) : (
                <>
                    {(text === "First" || text === "Previous") && iconLeft}
                    {(text === "Last" || text === "Next") && iconRight}
                </>
            )}
            {!isMobile && <ButtonText>{text}</ButtonText>}
        </ButtonTile>
    );

    return (
        <Wrapper>
            <Buttons>
                {renderButton(() => changePage(1), currentPage === 1, <PointerLeft />, <PointerLeft />, "First")}
                {renderButton(() => changePage(currentPage - 1), currentPage === 1, <PointerLeft />, null, "Previous")}
            </Buttons>
            <Counter>
                <CounterText>Page</CounterText>
                <CounterNumber>{currentPage}</CounterNumber>
                <CounterText>of</CounterText>
                <CounterNumber>{totalPages}</CounterNumber>
            </Counter>
            <Buttons>
                {renderButton(() => changePage(currentPage + 1), currentPage === totalPages, null, <PointerRight />, "Next")}
                {renderButton(() => changePage(totalPages), currentPage === totalPages, <PointerRight />, <PointerRight />, "Last")}
            </Buttons>
        </Wrapper>
    );
};