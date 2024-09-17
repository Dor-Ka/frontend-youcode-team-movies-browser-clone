import styled from "styled-components";
import { ReactComponent as StarIcon } from '../../image/Vector.svg';

export const MoviesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 324px);
  grid-gap: 24px;
  margin: 64px auto;
  width: 1400px;

  @media (max-width: 1480px) {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    width: 100%;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    width: 100%;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1,  1fr);
    margin-top: 24px;
    grid-gap: 16px;
  }
`;

export const SectionTitle = styled.span`
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  grid-column: 1 / -1;
  color: ${({ theme }) => theme.colors.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    font-size: 28px;
    line-height: 34px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const MoviePoster = styled.img`
  width: 177px;
  height: 264px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    width: 114px;
    height: 169px;
  }
`;

export const MovieCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  position: relative;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    flex-direction: row;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

export const MovieTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 29px;
  margin: 16px 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: 16px;
    line-height: 21px;
    margin: 0;
  }
`;

export const MovieSubTitle = styled.div`
  font-size: 16px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.waterloo};
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: 13px;
    margin-bottom: 0;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    margin-top: 8px;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    gap: 8px;
  }
`;

export const VoteCount = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.waterloo};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: 13px;
    line-height: 17px;
  }
`;

export const RatingNumber = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: 13px;
    line-height: 17px;
  }
`;

export const RatingStar = styled(StarIcon)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    width: 16px;
    height: 16px;
  }
`;