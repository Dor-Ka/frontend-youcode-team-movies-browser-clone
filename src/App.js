import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./common/components/Navigation";
import { toMoviesList, toActorsList, toPerson, toMovie, toMoviesSearch, toActorSearch } from "./routes";
import ActorsList from "./features/ActorList/components";
import { ActorsData } from "./features/ActorPage/components";
import { MoviesListPage } from "./features/MoviesListPage/components/MainContent";
import { MovieDetailsPage } from "./features/MovieDetailsPage/components/index";
import SearchProcess from "./common/components/SearchProcess";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path={toMoviesSearch()} element={<SearchProcess />} />
        <Route path={toActorSearch()} element={<SearchProcess />} />
        <Route path={toMovie()} element={<MovieDetailsPage />} />
        <Route path={toPerson()} element={<ActorsData />} />
        <Route path={toMoviesList()} element={<MoviesListPage />} />
        <Route path={toActorsList()} element={<ActorsList />} />
        <Route path="*" element={<Navigate to={toMoviesList()} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;