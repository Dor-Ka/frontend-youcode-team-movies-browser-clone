import React from 'react';
import { MoviesTilesList } from '../common/components/MoviesTilesList';
import { Tile } from '../common/components/Tile';
import { GenresList } from '../common/components/GenresList';
import { Rates } from '../common/components/Rates/components';

export const MoviesList = ({ header, movies, onMovieClick, subInfoExtractor, extra }) => {
    if (!movies || movies.length === 0) {
        return null;
    }

    return (
        <MoviesTilesList
            header={header}
            content={
                movies.map(({ id, title, poster_path, release_date, vote_average, vote_count, genre_ids, character, job }) => (
                    <Tile
                        key={id}
                        id={id}
                        image={poster_path}
                        title={title}
                        subInfo={subInfoExtractor ? subInfoExtractor({ release_date, character, job }) : null}
                        navigateTo={() => onMovieClick(id)}
                        extraContent={
                            <>
                                <GenresList genresIds={genre_ids} />
                                <Rates
                                    voteAverage={vote_average}
                                    voteCount={vote_count}
                                    hideTotalScore={true}
                                    extra={extra}
                                />
                            </>
                        }
                    />
                ))
            }
        />
    );
};