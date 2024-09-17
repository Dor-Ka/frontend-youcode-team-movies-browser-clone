import React from 'react';
import { useSelector } from 'react-redux';
import { selectCrew } from '../../../slices/actorDetailsSlice';
import { MoviesList } from '../../../../movieList';

export const Crew = ({ onMovieClick }) => {
    const crew = useSelector(selectCrew);
    return (
        <MoviesList
            header={`Movies - crew (${crew.length})`}
            movies={crew}
            onMovieClick={onMovieClick}
            subInfoExtractor={({ job }) => job}
            extra={true}
        />
    );
};