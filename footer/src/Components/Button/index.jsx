import { ButtonContainer } from "./styles";

const Button = ({title}) => {
    return(
        <ButtonContainer>
            <button>{title}</button>
        </ButtonContainer>
    )
}

export { Button }