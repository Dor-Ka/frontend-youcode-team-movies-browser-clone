import {
    Score,
    Votes,
    StyledRates,
    TotalScore,
    StyledStarIcon,
    StyledRatesOfMovieBanner,
    StyledStarIconOfMovieBanner,
    ScoreOfMovieBanner,
    TotalScoreOfMovieBanner,
    VotesOfMovieBanner,
    TotalScoreHidden,
    NoVotes,
    NoVotesOfMovieBanner
} from "./styled";

export const Rates = ({ useMovieBannerLayout, hideTotalScore, voteAverage, voteCount, extra }) => {

    const StyledRatesComponent = useMovieBannerLayout ? StyledRatesOfMovieBanner : StyledRates;
    const StyledStarIconComponent = useMovieBannerLayout ? StyledStarIconOfMovieBanner : StyledStarIcon;
    const ScoreComponent = useMovieBannerLayout ? ScoreOfMovieBanner : Score;
    const TotalScoreComponent = useMovieBannerLayout ? TotalScoreOfMovieBanner : TotalScore;
    const VotesComponent = useMovieBannerLayout ? VotesOfMovieBanner : Votes;
    const NoVotesComponent = useMovieBannerLayout ? NoVotesOfMovieBanner : NoVotes;
    const TotalScoreWrapper = hideTotalScore ? TotalScoreHidden : TotalScoreComponent;

    const ratesContentElement = voteCount ? (
        <>
            <StyledStarIconComponent extra={extra} />
            <ScoreComponent extra={extra}>
                {Number(voteAverage).toFixed(1).replace('.', ',')}
                <TotalScoreWrapper>/ 10</TotalScoreWrapper>
            </ScoreComponent>
            <VotesComponent extra={extra}>
                {Number(voteCount).toLocaleString().replace(/,/g, ',')} {voteCount === 1 ? "vote" : "votes"}
            </VotesComponent>
        </>
    ) : (
        <NoVotesComponent>No votes yet</NoVotesComponent>
    );

    return (
        <StyledRatesComponent>
            {ratesContentElement}
        </StyledRatesComponent>
    );
};