import {
    ListHeader,
    ListSection,
} from "./styled";

export const PeopleTilesList = ({ header, content }) => {
    return (
        <ListSection>
            <ListHeader>{header}</ListHeader>
            <>{content}</>
        </ListSection>
    );
};