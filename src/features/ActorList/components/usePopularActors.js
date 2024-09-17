import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL, API_KEY } from '../../../common/constants/config';
import { errorStatus, loadingStatus, successStatus } from "../../../common/constants/requestStatuses";

export const usePopularActors = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const currentPage = parseInt(searchParams.get("page")) || 1;

    const [totalPagesActor, setTotalPagesActor] = useState(1);
    const [popularActor, setPopularActor] = useState({
        status: "",
        data: [],
    });

    const [error, setError] = useState(null); 

    const url = `${BASE_URL}/person/popular?api_key=${API_KEY}`;

    useEffect(() => {
        const fetchTotalPagesActor = async () => {
            setPopularActor({
                status: loadingStatus,
                data: [],
            });
            setError(null); 

            try {
                const response = await axios.get(`${url}&page=1`);
                if (response.data && response.data.total_pages) {
                    setTotalPagesActor(Math.min(response.data.total_pages, 500));
                }
            } catch (error) {
                console.log(error);
                setError("Failed to fetch total pages");
            }
        };

        fetchTotalPagesActor();

        const fetchPopularActor = async () => {
            try {
                const response = await axios.get(`${url}&page=${currentPage}`);
                setPopularActor({
                    status: successStatus,
                    data: response.data.results,
                });
            } catch (error) {
                setPopularActor({
                    status: errorStatus,
                    data: [], 
                });
                setError("Failed to fetch popular actors");
                console.error(error.message);
            }
        };

        setTimeout(fetchPopularActor, 500);
    }, [url, currentPage]);

    return { popularActor, totalPagesActor, error };
};