import styled from "styled-components";
import { ReactComponent as Pointer } from './Pointer.svg';

export const Wrapper = styled.section`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  margin: 0 0 47px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    gap: 20px;
    margin: 10px auto;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    gap: 16px;
    margin: 10px auto;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    gap: 8px;
    margin: 7px auto;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    gap: 8px;
  }
`;

export const ButtonTile = styled.button`
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  align-items: center;
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.colors.scienceBlue};
  background-color: ${({ theme }) => theme.colors.pattensBlue};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    padding: 7.5px 12px;
    gap: 4px;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.waterloo};
    background-color: ${({ theme }) => theme.colors.mystic};
    cursor: default;
  }
`;

export const ButtonText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    display: none;
  }
`;

export const PointerLeft = styled(Pointer)`
  width: 7px;
  height: 11px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    width: 5px;
    height: 8px;
    }

  &:disabled {
    color: ${({ theme }) => theme.colors.waterloo};
  }
`;

export const PointerRight = styled(PointerLeft)`
  transform: rotate(180deg);
`;

export const Counter = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    gap: 2px;
  }
`;

export const CounterText = styled.span`
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 16px;
  line-height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    font-size: 10px;
  }
`;

export const CounterNumber = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    font-size: 10px;
  }
`;