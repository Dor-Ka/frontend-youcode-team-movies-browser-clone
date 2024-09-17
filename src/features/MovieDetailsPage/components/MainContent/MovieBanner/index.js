import { BannerContent, MovieTitle, BannerMainInfo, Banner } from "./styled";
import { getImageUrl } from "../../../../../common/functions/getImageUrl";
import { BACKDROP_WIDTH } from "../../../../../common/constants/config";
import { useSelector } from "react-redux";
import { selectMovieDetails } from "../../../slices/movieDetailsSlice";
import { Rates } from "../../../../../common/components/Rates/components/index";

export const MovieBanner = () => {
    const {
        title,
        backdrop_path,
        vote_average,
        vote_count
    } = useSelector(selectMovieDetails);

    return (
        <BannerContent>
            <Banner $backdrop={getImageUrl(backdrop_path, BACKDROP_WIDTH)}>
                <BannerMainInfo>
                    <MovieTitle>{title}</MovieTitle>
                    <Rates
                        extra
                        useMovieBannerLayout
                        voteAverage={vote_average}
                        voteCount={vote_count}
                    />
                </BannerMainInfo>
            </Banner>
        </BannerContent>
    )
};