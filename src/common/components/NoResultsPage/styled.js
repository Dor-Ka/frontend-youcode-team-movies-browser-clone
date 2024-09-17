import styled from "styled-components";
import { ReactComponent as NoResults } from './NoResults.svg';

export const Container = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 56px auto;
`;

export const Legend = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    font-size: 25px;
    font-weight: 500;
    line-height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
`;

export const Image = styled(NoResults)`
  width: 668px;
  height: auto;
  display: flex;
  justify-content: center;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    width: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    width: 330px;
  }
`;