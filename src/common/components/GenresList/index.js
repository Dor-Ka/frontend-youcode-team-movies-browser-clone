import { StyledGenresList, Genre } from "./styled";
import { useSelector } from "react-redux";
import { findMoviesGenresById } from "../../../common/slices/moviesGenresSlice";

export const GenresList = ({ genresIds, extra }) => {

    const genresFoundById = useSelector(state => findMoviesGenresById(state, genresIds));
    return (
        <StyledGenresList extra={extra}>
            {
                genresFoundById.map(({ id, name }) => (
                    <Genre extra={extra} key={id}>
                        {name}
                    </Genre>
                ))
            }
        </StyledGenresList>
    );
};