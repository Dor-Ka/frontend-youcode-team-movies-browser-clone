import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ extra }) => extra ? '64px' : '40px'};
  max-width: 1440px;
  width: 90%;
  margin: ${({ extraMargin }) => extraMargin ? '103px auto' : '56px auto'};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    margin: 40px auto;
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    margin: 24px auto;
  };
`;