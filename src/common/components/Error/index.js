import { toMoviesList } from "../../../routes"
import { Button, Container, ErrorImage, ErrorWrapper, Message, Warning } from "./styled"

export const Error = () => {
    return (
        <Container>
            <ErrorWrapper>
                <ErrorImage />
                <Warning>
                    Ooops! Something went wrong...
                </Warning>
                <Message>
                    Please check your network connection <br/>and try again
                </Message>
                <Button to={toMoviesList()}>Back to home page</Button>
            </ErrorWrapper>
        </Container>
    )
}