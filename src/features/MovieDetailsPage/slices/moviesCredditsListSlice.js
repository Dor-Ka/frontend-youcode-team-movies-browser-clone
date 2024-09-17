import { createSlice } from "@reduxjs/toolkit";
import { loadingStatus, successStatus, errorStatus } from "../../../common/constants/requestStatuses";

export const moviesCredditsListSlice = createSlice({
    name: "moviesCreditsList",
    initialState: {
        moviesCreditsList: [],
        fetchMoviesCreditsListStatus: loadingStatus,
    },
    reducers: {
        fetchMoviesCreditsList: () => { },
        fetchMoviesCreditsListSuccess: (state, { payload: moviesCreditsList }) => {
            state.fetchMoviesCreditsListStatus = successStatus;
            state.moviesCreditsList = moviesCreditsList;
        },
        fetchMoviesCreditsListError: (state) => {
            state.fetchMoviesCreditsListStatus = errorStatus;
        },
        resetMoviesCreditsList: (state) => {
            state.moviesCreditsList = [];
            state.fetchMoviesCreditsListStatus = loadingStatus;
        },
    }
});

export const {
    fetchMoviesCreditsList,
    fetchMoviesCreditsListSuccess,
    fetchMoviesCreditsListError,
    resetMoviesCreditsList
} = moviesCredditsListSlice.actions;

export const selectMoviesCreditsListState = state => state.moviesCreditsList;

export const selectMoviesCreditsListFetchStatus = state => selectMoviesCreditsListState(state).fetchMoviesCreditsListStatus;
export const selectMovieCreddits = state => selectMoviesCreditsListState(state).moviesCreditsList;

export const moviesCreditsListReducer = moviesCredditsListSlice.reducer;