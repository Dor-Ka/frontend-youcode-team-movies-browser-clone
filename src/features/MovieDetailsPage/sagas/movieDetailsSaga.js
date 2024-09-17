import { call, put, takeLatest } from "redux-saga/effects";
import {
    fetchMovieDetails,
    fetchMovieDetailsSuccess,
    fetchMovieDetailsError,
} from "../slices/movieDetailsSlice";
import { API_KEY } from "../../../common/constants/config";
import { BASE_URL } from "../../../common/constants/config";

function* fetchMovieDetailsHandler(action) {
    try {
        const response = yield call(fetch, `${BASE_URL}/movie/${action.payload}?api_key=${API_KEY}`);
        const data = yield response.json();
        yield put(fetchMovieDetailsSuccess(data));
    } catch {
        yield put(fetchMovieDetailsError());
    }
};

export function* movieDetailsSaga() {
    yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
};