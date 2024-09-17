import React from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../../../common/components/Loader';
import { Error } from '../../../common/components/Error';
import { Details } from './Content/Details';
import { Cast } from './Content/Cast';
import { Crew } from './Content/Crew';
import { Container } from '../../../common/components/Container';
import { useNavigationToPage } from '../../../useNavigation';
import { toMovie } from '../../../routes';
import { useLoadingDelay } from './useLoadingDelay';
import { useActorData } from './useActorData';
import { successStatus, errorStatus } from "../../../common/constants/requestStatuses";

export const ActorsData = () => {
    const { id: actorId } = useParams();
    const handleTileClick = useNavigationToPage();
    const isLoading = useLoadingDelay();
    const { actor, status, cast, crew } = useActorData(actorId);

    if (isLoading) {
        return <Loader extraTopMargin />;
    }

    if (status === errorStatus || !cast || !crew) {
        return <Error />;
    }

    if (status === successStatus && actor) {
        return (
            <Container extra>
                <Details actor={actor} />
                <Cast onMovieClick={(id) => handleTileClick(toMovie, id)} />
                <Crew onMovieClick={(id) => handleTileClick(toMovie, id)} />
            </Container>
        );
    }

    return <Error />;
};