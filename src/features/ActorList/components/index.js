import { Pagination } from "../../../common/components/Pagination";
import { Container } from "../../../common/components/Container";
import { Loader } from "../../../common/components/Loader";
import { Tile } from '../../../common/components/Tile';
import { toPerson } from "../../../routes";
import { PeopleTilesList } from '../../../common/components/PeopleTilesList';
import { useNavigationToPage } from '../../../useNavigation';
import { usePopularActors } from './usePopularActors';
import { Error } from "../../../common/components/Error";
import { errorStatus, loadingStatus } from "../../../common/constants/requestStatuses";

const ActorsList = () => {

    const handleTileClick = useNavigationToPage();
    const { popularActor } = usePopularActors();
    const actorList = popularActor.data;

    if (popularActor.status === loadingStatus) {
        return <Loader extraTopMargin />;
    }
    
    if (popularActor.status === errorStatus) {
        return <Error />;
    }

    return (
        <Container>
            <PeopleTilesList
                header="Popular people"
                content={
                    actorList.map((actor) => (
                        <Tile
                            key={actor.id}
                            id={actor.id}
                            image={actor.profile_path}
                            title={actor.original_name}
                            navigateTo={() => handleTileClick(toPerson, actor.id)}
                        />
                    ))
                }
            />
            <Pagination />
        </Container>
    );
};

export default ActorsList;