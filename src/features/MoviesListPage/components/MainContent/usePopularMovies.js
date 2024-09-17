import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL, API_KEY } from '../../../../common/constants/config';
import { errorStatus, loadingStatus, successStatus } from "../../../../common/constants/requestStatuses";

export const usePopularMovies = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const currentPage = parseInt(searchParams.get("page")) || 1;

    const [totalPagesMovies, setTotalPagesMovies] = useState(1);
    const [popularMovies, setPopularMovies] = useState({
        status: "",
        data: [],
    });

    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;

    useEffect(() => {
        const fetchTotalPagesMovies = async () => {
            setPopularMovies({
                status: loadingStatus,
                data: [],
            });

            try {
                const response = await axios.get(`${url}&page=1`);
                if (response.data && response.data.total_pages) {
                    setTotalPagesMovies(Math.min(response.data.total_pages, 500));
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchTotalPagesMovies();

        const fetchPopularMovies = async () => {
            try {
                const response = await axios.get(`${url}&page=${currentPage}`);
                setPopularMovies({
                    status: successStatus,
                    data: response.data.results,
                });
            } catch (error) {
                setPopularMovies({
                    status: errorStatus,
                    data: [],
                });
                console.error(error.message);
            }
        };

        setTimeout(fetchPopularMovies, 500);
    }, [url, currentPage]);

    return { popularMovies, totalPagesMovies };
};