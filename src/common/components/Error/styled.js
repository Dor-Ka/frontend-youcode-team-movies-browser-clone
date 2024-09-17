import styled from "styled-components";
import { ReactComponent as Danger } from './Danger.svg';
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 56px auto;
`;

export const ErrorWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

export const ErrorImage = styled(Danger)`
  width: 120px;
  height: 120px;
  margin: 124px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    width: 75px;
    height: 75px;
  }
`;

export const Warning = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  text-align: center;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    font-size: 20px;
  }
`;

export const Message = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    font-size: 16px;
  }
`;

export const Button = styled(NavLink)`
  padding: 16px 24px;
  border: none;
  background: ${({ theme }) => theme.colors.scienceBlue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  text-decoration: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    font-size: 12px;
  }
`;