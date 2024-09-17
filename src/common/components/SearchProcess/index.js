import { useEffect } from "react";
import { useQueryParameter } from '../Navigation/Search/useQueryParameter';
import { useFetchSearchResult } from './useFetchSearchResult';
import { useLocation } from 'react-router-dom';
import { Loader } from '../Loader';
import { Error } from '../Error';
import { NoResults } from '../NoResultsPage';
import { Pagination } from '../Pagination';
import { Tile } from '../Tile';
import { errorStatus, loadingStatus } from '../../constants/requestStatuses';
import { Title, Wrapper, ContentWrapper } from './styled';
import { toPerson, toMovie } from "../../../routes";
import { useNavigationToPage } from '../../../useNavigation';
import { PeopleTilesList } from '../PeopleTilesList';
import { getYear } from '../../functions/getYear';
import { useDispatch } from 'react-redux';
import { fetchMoviesGenres } from '../../slices/moviesGenresSlice';
import { MoviesList } from "../../../features/movieList";
import { Container } from "../Container";

const SearchProcess = () => {
    const query = useQueryParameter("query");
    const dispatch = useDispatch();
    const currentLocation = useLocation();
    const isMovieSearch = currentLocation.pathname.startsWith("/movies");

    const { searchResults } = useFetchSearchResult();
    const { status, data } = searchResults;
    const searchAmount = data?.total_results;
    const searchList = data?.results || [];

    const handleTileClick = useNavigationToPage();

    useEffect(() => {
        dispatch(fetchMoviesGenres());
    }, [dispatch]);

    const renderTilesList = () => {
        if (isMovieSearch) {
            return (
                <MoviesList
                    movies={searchList}
                    onMovieClick={(id) => handleTileClick(toMovie, id)}
                    subInfoExtractor={({ release_date }) => getYear(release_date)}
                    extra={true}
                />
            );
        }

        return (
            <PeopleTilesList
                content={searchList.map((actor) => (
                    <Tile
                        key={actor.id}
                        id={actor.id}
                        image={actor.profile_path}
                        title={actor.original_name}
                        navigateTo={() => handleTileClick(toPerson, actor.id)}
                    />
                ))}
            />
        );
    };

    if (status === loadingStatus)
        return <Wrapper><Title>Search results for "{query}"</Title><Loader /></Wrapper>;

    if (status === errorStatus)
        return <Error />;

    if (searchAmount === 0)
        return <NoResults />;

    return (
        <Container>
            <ContentWrapper>
                <Title>Search results for "{query}" ({searchAmount})</Title>
                {renderTilesList()}
            </ContentWrapper>
            <Pagination />
        </Container>
    );
};

export default SearchProcess;