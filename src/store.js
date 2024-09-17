import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { movieDetailsReducer } from './features/MovieDetailsPage/slices/movieDetailsSlice';
import { rootSaga } from './rootSaga';
import { moviesCreditsListReducer } from './features/MovieDetailsPage/slices/moviesCredditsListSlice';
import { moviesGenresReducer } from './common/slices/moviesGenresSlice';
import { actorDetailsSliceReducer } from "./features/ActorPage/slices/actorDetailsSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        movieDetails: movieDetailsReducer,
        moviesCreditsList: moviesCreditsListReducer,
        moviesGenres: moviesGenresReducer,
        actorDetails: actorDetailsSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);