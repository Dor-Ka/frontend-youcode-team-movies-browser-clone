import {
    StyledTileList,
    ListHeader,
} from "./styled";

export const MoviesTilesList = ({ header, content }) => {
    return (
        <StyledTileList>
            <ListHeader>{header}</ListHeader>
            <>{content}</>
        </StyledTileList>
    );
};