export const toMoviesList = () => "/movies";
export const toActorsList = () => "/people";

export const toMovie = ({ id } = { id: ":id" }) => `/movies/${id}`;
export const toPerson = ({ id } = { id: ":id" }) => `/people/${id}`;

export const toMoviesSearch = () => "/movies/search";
export const toActorSearch = () => "/people/search";