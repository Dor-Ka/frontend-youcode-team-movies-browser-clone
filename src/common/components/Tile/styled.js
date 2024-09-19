import styled from "styled-components";

export const StyledPersonTile = styled.li`
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.colors.brightHeather};
    cursor: pointer;
    padding: 16px;
    list-style-type: none;
    word-break: break-word;
    height: 100%;
    justify-content: space-between;
    
    &:hover {
        transform: scale(1.03);
    }
`;

export const StyledMovieTile = styled(StyledPersonTile)`
    @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        flex-direction: row;
        width: 100%;
        gap: 16px;
        min-height: 201px;
    }

    &:hover {
        transform: scale(1.03);
    }
`;

export const Image = styled.img`
    aspect-ratio: 2 / 3;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.silver};
    display: block;
`;

export const ImageMovie = styled(Image)`
    @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        width: 114px;
        height: 171px;
    }
`;

export const IconContainer = styled.div`
    aspect-ratio: 2 / 3;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.silver};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconContainerMovie = styled(IconContainer)`
    @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        max-width: 114px;
        height: 171px;
    }
`;

export const GeneralInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-grow: 1;
    text-align: center;
    justify-items: center;
`;

export const MovieGeneralInfo = styled(GeneralInfo)`
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Title = styled.header`
    font-size: 22px;
    font-weight: 500;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        font-size: 16px;
    }
`;

export const MovieTitle = styled(Title)`
    text-align: left;
`;

export const SubInfo = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.waterloo};
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletM}) {
        font-size: 13px;
    }
`;

export const MovieSubInfo = styled(SubInfo)`
    text-align: left;
`;

export const ExtraContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-grow: 1;
    gap: 10px;
`;

export const ImageContainer = styled.div`
    aspect-ratio: 2 / 3;
    width: 114px;
    height: 171px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.silver};
    border-radius: 5px;
`;