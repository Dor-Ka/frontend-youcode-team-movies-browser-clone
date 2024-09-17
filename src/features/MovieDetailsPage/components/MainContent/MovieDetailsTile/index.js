import { useSelector } from "react-redux";
import {
    StyledDetailsTile,
    Image,
    Description,
    Details,
    Header,
    Year,
    DetailInfo,
    DetailInfoItem,
    Label,
    IconContainer
} from "./styled.js";
import { selectMovieDetails } from
    "../../../slices/movieDetailsSlice.js";
import { StyledProfileIcon } from "../../../../../common/components/StyledProfileIcon/index.js";
import { StyledVideoIcon } from "../../../../../common/components/StyledVideoIcon/index.js";
import { getYear } from "../../../../../common/functions/getYear.js";
import { getImageUrl } from "../../../../../common/functions/getImageUrl.js"
import { checkIsValidImageUrl } from "../../../../../common/functions/checkIsValidImageUrl.js";
import { IMAGE_WIDTH, INVALID_IMAGE_URL } from "../../../../../common/constants/config";

export const MovieDetailsTile = ({ extraContent }) => {
    const {
        title,
        poster_path,
        overview,
        release_date,
        production_countries
    } = useSelector(selectMovieDetails);

    const imageUrl = getImageUrl(poster_path, IMAGE_WIDTH);
    const isValidImageUrl = checkIsValidImageUrl(imageUrl, INVALID_IMAGE_URL);

    const PlaceholderIcon = extraContent ? StyledVideoIcon : StyledProfileIcon;

    const renderDetails = (label, value) => (
        <DetailInfoItem >
            <Label>{label}:&nbsp;</Label>
            {value || <>Unknow</>}
        </DetailInfoItem>
    );

    const renderMovieDetails = () => (
        <DetailInfo>
            {
                renderDetails("Production",
                    production_countries ?
                        production_countries
                            .map(({ name, iso_3166_1 }) => window.innerWidth <= 475 ? iso_3166_1 : name)
                            .join(", ") :
                        <>Unknow</>
                )
            }
            {
                renderDetails("Release date",
                    release_date ?
                        new Date(release_date).toLocaleString(undefined,
                            { year: "numeric", month: "numeric", day: "numeric" }
                        ) :
                        <>Unknow</>
                )
            }
        </DetailInfo>
    );

    const imageElement = isValidImageUrl ? <Image src={imageUrl} alt={title} /> : <IconContainer><PlaceholderIcon /></IconContainer>
    const yearElement = release_date && <Year>{getYear(release_date)}</Year>;
    const detailsContent = renderMovieDetails(production_countries, release_date)
    const descriptionElement = overview && <Description>{overview}</Description>;

    return (
        <StyledDetailsTile>
            {imageElement}
            <Details>
                <Header>{title}</Header>
                {yearElement}
                {detailsContent}
                {extraContent}
            </Details>
            {descriptionElement}
        </StyledDetailsTile>
    );
};