import styled from "styled-components";

export const StyledTileList = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-gap: 24px;
  justify-content: center;
  padding: 0;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    grid-template-columns: repeat(1,  1fr);
    grid-gap: 16px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    grid-gap: 12px;
  };
`;

export const ListHeader = styled.header`
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