import { createSlice } from '@reduxjs/toolkit';
import { loadingStatus, successStatus, errorStatus } from "../../../common/constants/requestStatuses";

const actorDetailsSlice = createSlice({
    name: 'actorDetails',
    initialState: {
        actor: null,
        cast: [],
        crew: [],
        status: loadingStatus,
        error: null,
    },
    reducers: {
        fetchActorStart: (state) => {
            state.status = loadingStatus;
        },
        fetchActorSuccess: (state, action) => {
            state.status = successStatus;
            state.actor = action.payload;
        },
        fetchCastAndCrewSuccess: (state, action) => {
            state.status = successStatus;
            state.cast = action.payload.cast;
            state.crew = action.payload.crew;
        },
        fetchActorFailure: (state, action) => {
            state.status = errorStatus;
            state.error = action.payload;
        },
    },
});

export const {
    fetchActorStart,
    fetchActorSuccess,
    fetchCastAndCrewSuccess,
    fetchActorFailure
} = actorDetailsSlice.actions;

export const selectActor = (state) => state.actorDetails.actor;
export const selectActorStatus = (state) => state.actorDetails.status;
export const selectCast = (state) => state.actorDetails.cast;
export const selectCrew = (state) => state.actorDetails.crew;

export const actorDetailsSliceReducer = actorDetailsSlice.reducer;