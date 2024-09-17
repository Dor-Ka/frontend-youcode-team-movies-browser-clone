import { useLocation, useNavigate } from "react-router-dom";

export const useQueryParameter = (parameterName) => {
    const { search } = useLocation();
    return new URLSearchParams(search).get(parameterName);
};

export const useUpdateQueryParameter = () => {
    const navigate = useNavigate();
    const { search, pathname } = useLocation();
    const searchParams = new URLSearchParams(search || '');

    const isMoviesPage = pathname.startsWith("/movies");

    return ({ key, value, resetPage }) => {

        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        if (key === "query" && resetPage) {
            searchParams.set('page', '1');
        }

        const newPath = isMoviesPage 
            ? (key === "query" && !value ? "/movies" : "/movies/search")
            : (key === "query" && !value ? "/people" : "/people/search");

        const params = new URLSearchParams(searchParams).toString();

        navigate(`${newPath}?${params}`);
    };
};