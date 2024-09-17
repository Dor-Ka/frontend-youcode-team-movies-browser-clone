import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { 
    selectMoviesCreditsListFetchStatus, 
    selectMovieCreddits, 
    fetchMoviesCreditsList, 
    resetMoviesCreditsList 
} from "../slices/moviesCredditsListSlice";
import { 
    selectFetchMovieDetailsStatus, 
    fetchMovieDetails, 
    resetMovieDetails, 
    selectMovieDetails 
} from "../slices/movieDetailsSlice";
import { selectMoviesGenresFetchStatus, fetchMoviesGenres } from "../../../common/slices/moviesGenresSlice";
import { checkFetchStates } from "../../../common/functions/checkFetchStates";
import { loadingStatus, errorStatus, successStatus } from "../../../common/constants/requestStatuses";

export const useMovieDetailsPageLogic = () => {
    const { id: movieId } = useParams();
    const dispatch = useDispatch();

    const movieDetailsFetchStatus = useSelector(selectFetchMovieDetailsStatus);
    const moviesCreditsListFetchStatus = useSelector(selectMoviesCreditsListFetchStatus);
    const moviesGenresFetchStatus = useSelector(selectMoviesGenresFetchStatus);

    const movieDetails = useSelector(selectMovieDetails);
    const movieCredits = useSelector(selectMovieCreddits);

    const isLoading = checkFetchStates([movieDetailsFetchStatus, moviesCreditsListFetchStatus, moviesGenresFetchStatus], loadingStatus);
    const isError = checkFetchStates([movieDetailsFetchStatus, moviesCreditsListFetchStatus, moviesGenresFetchStatus], errorStatus);
    const isSuccess = checkFetchStates([movieDetailsFetchStatus, moviesCreditsListFetchStatus, moviesGenresFetchStatus], successStatus, true) &&
        movieDetails.title &&
        movieCredits.cast;

    useEffect(() => {
        dispatch(resetMovieDetails());
        dispatch(resetMoviesCreditsList());

        const fetchDataDelayId = setTimeout(() => {
            dispatch(fetchMovieDetails(movieId));
            dispatch(fetchMoviesCreditsList(movieId));
            dispatch(fetchMoviesGenres());
        }, 500);

        return () => clearTimeout(fetchDataDelayId);
    }, [dispatch, movieId]);

    return [isLoading, isError, isSuccess];
};