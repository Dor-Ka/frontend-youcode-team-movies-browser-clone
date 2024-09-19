import styled from "styled-components";
import { ReactComponent as StarIcon } from "../Star.svg";

export const StyledRates = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-areas: 
      "star score votes";
    grid-gap: 16px 8px;
    align-items: center;
    justify-content: start;
    margin-top: auto;


    @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
      grid-template-areas: 
        "star score votes";
      grid-gap: 8px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
      margin-top: 0;
      margin-bottom: auto;
    };
`;

export const StyledRatesOfMovieBanner = styled(StyledRates)`
  grid-template-areas: 
    "star score"
    "votes votes";
  margin-top: auto;
  margin-bottom: -12px;
      
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    grid-gap: 4px;
    grid-template-areas: 
      "star score votes"
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
      margin-bottom: -7px;
    };
`;

export const StyledStarIcon = styled(StarIcon)`
  grid-area: star;
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
      width:  ${({ extra }) => extra ? "16px" : "20px"};
      height:  ${({ extra }) => extra ? "16px" : "20px"};
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
      width: 16px;
      height: 16px;
  };
`;

export const StyledStarIconOfMovieBanner = styled(StyledStarIcon)`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    width: 21px;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    width: 16px;
  };
`;

export const Score = styled.p`
    font-size: ${({ extra }) => extra ? "16px" : "22px"};
    font-weight: ${({ extra }) => extra ? "600" : "500"};
    margin: 0;
    grid-area: score;
    align-self: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        font-size: ${({ extra }) => extra ? "14px" : "18px"};
      };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
        font-size: 13px;
        font-weight: 600;
      };
`;

export const ScoreOfMovieBanner = styled(Score)`
  font-size: 30px;

  @media (max-width: 750px) {
    font-size: 24px;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    font-size: 14px;
  };
`;

export const TotalScore = styled.span`
    font-size: 14px;
    padding: 0 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
      font-size: 12px;
      padding:  0 6px;
      };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
      display: none;
      padding:  0 4px;
    };
`;

export const TotalScoreHidden = styled(TotalScore)`
  display: none;
`;

export const TotalScoreOfMovieBanner = styled(TotalScore)`
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    font-size: 10px;
    padding:  0 4px;
    display: unset;
  };
`;

export const Votes = styled.p`
  font-size: 14px;
  grid-area: votes;
  margin: 0;
  color: ${({ theme, extra }) => extra ? theme.colors.waterloo : theme.colors.black};


  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
      font-size: 13px;
      color: ${({ theme }) => theme.colors.waterloo};
  };
`;

export const NoVotes = styled(Votes)`
  grid-area:  unset;
`;

export const VotesOfMovieBanner = styled(Votes)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    font-size: 10px;
    color: ${({ theme }) => theme.colors.white};
  };
`;

export const NoVotesOfMovieBanner = styled(VotesOfMovieBanner)`
  grid-area:  unset;
`;