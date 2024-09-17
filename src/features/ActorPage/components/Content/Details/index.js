import { BASE_IMAGE_URL, IMAGE_WIDTH } from "../../../../../common/constants/config";
import {
    ActorProfile,
    ActorPhoto,
    ActorName,
    ActorDetails,
    ActorDetailsWrapper,
    DetailLabel,
    Biography,
    ActorDetail,
    PlaceholderPhoto
} from "./styled";
import { useIsMobile } from './useIsMobile';

const formatDate = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
};

export const Details = ({ actor }) => {
    const isMobile = useIsMobile();

    const hasPhoto = !!actor.profile_path;
    const actorPhotoUrl = `${BASE_IMAGE_URL}${IMAGE_WIDTH}${actor.profile_path}`;

    return (
        actor && (
            <ActorProfile>
                {hasPhoto ? (
                    <ActorPhoto src={actorPhotoUrl} alt={actor.name} />
                ) : (
                    <PlaceholderPhoto />
                )}
                <ActorDetailsWrapper>
                    <ActorName>{actor.name}</ActorName>
                    <ActorDetails>
                        <ActorDetail>
                            <DetailLabel>{isMobile ? 'Birth:' : 'Date of birth:'}</DetailLabel>
                            {actor.birthday
                                ? formatDate(actor.birthday)
                                : "Unknown"
                                }
                        </ActorDetail>
                        <ActorDetail>
                            <DetailLabel>Place of birth:</DetailLabel>
                            {actor.place_of_birth
                                ? actor.place_of_birth
                                : "Unknown"
                            }
                        </ActorDetail>
                    </ActorDetails>
                </ActorDetailsWrapper>
                <Biography>{actor.biography}</Biography>
            </ActorProfile>
        )
    );
};