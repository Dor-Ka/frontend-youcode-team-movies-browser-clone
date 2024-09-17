import { ReactComponent as ProfileIcon } from "../../../icons/Profile.svg";
import styled from "styled-components";

export const StyledProfileIcon = styled(ProfileIcon)`
    @media (max-width: ${({theme}) => theme.breakpoints.mobileM}) {
       width: 30px;
    };
`;