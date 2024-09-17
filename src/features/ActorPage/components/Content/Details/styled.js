import styled from "styled-components";
import noProfile from "../../../../../icons/Profile.svg";

export const ActorProfile = styled.article`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
  min-height: 644px;
  padding: 40px;
  margin: auto;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    min-height: 360px;
    padding: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    min-height: 300px;
    padding: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    min-height: 196px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 16px;
  }
`;

export const ActorPhoto = styled.img`
  width: auto;
  height: 564px;
  border-radius: 5px;
  float: left;
  margin: 0 40px 10px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    height: 300px;
    margin: 0 20px 6px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    height: 240px;
    margin: 0 22px 4px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    width: 116px;
    height: 163px;
    margin: 0;
  }
`;

export const PlaceholderPhoto = styled.div`
  width: 399px;
  height: 564px;
  border-radius: 5px;
  float: left;
  margin: 0 40px 10px 0;
  background-image: url(${noProfile});
  background-color: ${({ theme }) => theme.colors.silver};
  background-size: 32%;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    height: 300px;
    width: 210px;
    margin: 0 20px 6px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    height: 240px;
    width: 170px;
    margin: 0 22px 4px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    width: 116px;
    height: 163px;
    margin: 0;
  }
`;

export const ActorName = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  margin: 8px 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: 26px;
    line-height: 30px;
    margin: 6px 0 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    margin: 4px 0 16px;;
  }
`;

export const ActorDetails = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  font-size: 18px;
  line-height: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: 15px;
    line-height: 18px;
    gap: 4px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    font-size: 12px;
    line-height: 14px;
    gap: 2px;
  }
`;

export const ActorDetailsWrapper = styled.div`
  flex: 1 1 0%;
`;

export const ActorDetail = styled.div`
`;

export const DetailLabel = styled.span`
  margin-right: 6px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.stormGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    margin-right: 4px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    margin-right: 2px;
  }
`;

export const Biography = styled.p`
  font-size: 20px;
  line-height: 32px;
  margin: 24px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: 17px;
    line-height: 27px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    font-size: 14px;
    line-height: 22px;
    margin-top: 0;
  }
`;