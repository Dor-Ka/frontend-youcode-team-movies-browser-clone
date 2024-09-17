import { useParams } from "react-router-dom"

export const useURLId = () => {
    const { id } = useParams();
    return id;
};