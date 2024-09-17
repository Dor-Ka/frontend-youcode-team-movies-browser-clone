import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
  font-size: 36px;
  font-weight: 600;
  word-break: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: 25px;
    font-weight: 600;
    line-height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 56px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    margin: 40px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    margin: 24px auto;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;