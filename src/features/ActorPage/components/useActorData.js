import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    fetchActorStart,
    selectActor,
    selectActorStatus,
    selectCast,
    selectCrew
} from '../slices/actorDetailsSlice';

export const useActorData = (actorId) => {
    const dispatch = useDispatch();

    const actor = useSelector(selectActor);
    const status = useSelector(selectActorStatus);
    const cast = useSelector(selectCast);
    const crew = useSelector(selectCrew);

    useEffect(() => {
        dispatch(fetchActorStart(actorId));
    }, [dispatch, actorId]);

    return { actor, status, cast, crew };
};