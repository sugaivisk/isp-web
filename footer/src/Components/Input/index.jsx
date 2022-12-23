import { InputContainer, TextField, ErrorText, LabelText } from "./styles";

const Input = ({type}) => {
    return(
        <>
            <InputContainer>
                <LabelText>{type}</LabelText>
                <input />
            </InputContainer>
            <ErrorText />
        </>
    )
}

const TextArea = ({type}) => {
    return (
        <>
            <TextField>
                <LabelText>{type}</LabelText>
                <textarea></textarea>
            </TextField>
            <ErrorText />
        </>
    )
}

export { Input, TextArea }