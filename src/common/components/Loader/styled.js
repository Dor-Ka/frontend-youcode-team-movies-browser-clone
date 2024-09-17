import styled, { keyframes } from "styled-components";
import { ReactComponent as Ellipse } from './Ellipse.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
}
  to {
    transform: rotate(360deg);
}
`;

export const Image = styled(Ellipse)`
  animation: ${rotate} 1s linear infinite;
  width: 91px;
  height: 91px;
  margin: ${({ extraTopMargin }) => extraTopMargin ? '217px 0 0' : '120px'};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
    width: 65px;
    height: 65px;
    margin: ${({ extraTopMargin }) => extraTopMargin ? '145px 0 0' : '74px 0 0'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileM}) {
    width: 40px;
    height: 40px;
    margin: ${({ extraTopMargin }) => extraTopMargin ? '65px 0 0' : '24px 0 0'};
  }
`;