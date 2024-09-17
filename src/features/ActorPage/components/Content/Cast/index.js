import React from 'react';
import { useSelector } from 'react-redux';
import { selectCast } from '../../../slices/actorDetailsSlice';
import { MoviesList } from '../../../../movieList';

export const Cast = ({ onMovieClick }) => {
    const cast = useSelector(selectCast);
    return (
        <MoviesList
            header={`Movies - cast (${cast.length})`}
            movies={cast}
            onMovieClick={onMovieClick}
            subInfoExtractor={({ character }) => character}
            extra={true}
        />
    );
};