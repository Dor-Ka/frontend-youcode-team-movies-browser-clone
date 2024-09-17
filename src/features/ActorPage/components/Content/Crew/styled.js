import styled from "styled-components";

export const MoviesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 324px);
  grid-gap: 24px;
  margin: 64px auto;
  width: 1400px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    grid-template-columns: repeat(1,  1fr);
    margin-top: 24px;
    grid-gap: 16px;
  }
`;

export const Title = styled.span`
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

export const TitleWithMargin = styled(Title)`
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    margin-top: 20px;
  }
`;