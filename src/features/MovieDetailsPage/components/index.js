import { MainContent } from "./MainContent";
import { Loader } from "../../../common/components/Loader";
import { Error } from "../../../common/components/Error";
import { NoResults } from "../../../common/components/NoResultsPage";
import { useMovieDetailsPageLogic } from "../hooks/useMovieDetailsPageLogic";

export const MovieDetailsPage = () => {
    const [isLoading, isError, isSuccess] = useMovieDetailsPageLogic();

    if (isLoading) {
        return <Loader extraTopMargin />;
    }

    if (isError || !isSuccess) {
        return <Error />;
    }
    return (
        <MainContent />
    );
};