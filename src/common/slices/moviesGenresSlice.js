import { createSlice } from "@reduxjs/toolkit";
import { loadingStatus, successStatus, errorStatus } from "../constants/requestStatuses";

export const moviesGenresSlice = createSlice({
    name: "moviesGenres",
    initialState: {
        moviesGenres: null,
        moviesGenresFetchStatus: loadingStatus,
    },
    reducers: {
        fetchMoviesGenres: () => { },
        fetchMoviesGenresSuccess: (state, { payload: moviesGenres }) => {
            state.moviesGenres = moviesGenres;
            state.moviesGenresFetchStatus = successStatus;
        },
        fetchMoviesGenresError: (state) => {
            state.moviesGenresFetchStatus = errorStatus;
        },
    },
});

export const { fetchMoviesGenres, fetchMoviesGenresSuccess, fetchMoviesGenresError } = moviesGenresSlice.actions;

export const selectMoviesGenresState = (state) => state.moviesGenres;

export const selectMoviesGenresFetchStatus = (state) => {
    const moviesGenresState = selectMoviesGenresState(state);
    return moviesGenresState ? moviesGenresState.moviesGenresFetchStatus : null;
};

export const selectMoviesGenres = (state) => {
    const moviesGenresState = selectMoviesGenresState(state);
    return moviesGenresState ? moviesGenresState.moviesGenres : null;
};

export const findMoviesGenresById = (state, genresIds) => {
    if (!genresIds) {
        return [];
    }

    const genres = selectMoviesGenres(state)?.genres || [];
    return genres.filter(({ id }) => genresIds.includes(id));
};

export const moviesGenresReducer = moviesGenresSlice.reducer;