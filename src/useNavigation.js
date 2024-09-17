import { useNavigate } from "react-router-dom";

export const useNavigationToPage = () => {

    const navigate = useNavigate();

    const handleTileClick = (toPage, id) => {
        navigate(toPage({id}));
    };

    return handleTileClick;
};