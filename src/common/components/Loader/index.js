import { Image, Wrapper } from "./styled";

export const Loader = ({ extraTopMargin }) => {

    return (
        <Wrapper>
            <Image extraTopMargin={extraTopMargin} />
        </Wrapper>
    );
};