import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMoviesGenres } from '../../../../common/slices/moviesGenresSlice';
import { usePopularMovies } from './usePopularMovies';
import { Loader } from '../../../../common/components/Loader';
import { Error } from '../../../../common/components/Error';
import { errorStatus, loadingStatus } from '../../../../common/constants/requestStatuses';
import { MoviesList } from '../../../movieList';
import { useNavigationToPage } from '../../../../useNavigation';
import { toMovie } from '../../../../routes';
import { Pagination } from '../../../../common/components/Pagination';
import { Container } from '../../../../common/components/Container';
import { getYear } from '../../../../common/functions/getYear';

export const MoviesListPage = () => {
    const dispatch = useDispatch();
    const handleTileClick = useNavigationToPage();
    const { popularMovies } = usePopularMovies();
    const movieList = popularMovies.data;

    useEffect(() => {
        dispatch(fetchMoviesGenres());
    }, [dispatch]);

    if (popularMovies.status === loadingStatus) {
        return <Loader extraTopMargin />;
    }

    if (popularMovies.status === errorStatus) {
        return <Error />;
    }

    return (
        <Container>
            <MoviesList
                header="Popular movies"
                movies={movieList}
                onMovieClick={(id) => handleTileClick(toMovie, id)}
                subInfoExtractor={({ release_date }) => getYear(release_date)}
                extra={true}
            />
            <Pagination />
        </Container>
    );
};